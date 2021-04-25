import React, { useState } from 'react';
import { View, Text, Image, Pressable, Platform, Alert } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import type { PlantSaveProps } from '../../types/navigation';

import { Button } from '../../components/Button';

import { savePlant } from '../../services/storage';

import waterdropImg from '../../../assets/waterdrop.png';
import { styles } from './styles';


function PlantSave({ route, navigation }: PlantSaveProps) {
  const { plant } = route.params;

  const [date, setDate] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(Platform.OS === 'ios');

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri={plant.photo}
          width={150}
          height={150}
        />

        <Text style={styles.plantName}>
          {plant.name}
        </Text>
        <Text style={styles.plantDetails}>
          {plant.about}
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image
            source={waterdropImg}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        { Platform.OS === 'android' ? (
          <View style={styles.timePickerContainer}>
            <Pressable style={styles.timePickerButton}
              android_ripple={{ borderless: true }}
              onPress={() => {
                setShowTimePicker(s => !s);
              }}
            >
              <Text style={styles.timePickerText}>
                {`Mudar ${format(date, 'HH:mm')}`}
              </Text>
            </Pressable>
          </View>
        ) : null }

        { showTimePicker ? (
          <DateTimePicker
            mode='time'
            display='spinner'
            value={date}
            onChange={(_event, date) => {
              if (Platform.OS === 'android') {
                setShowTimePicker(s => !s)
              }

              if (date !== undefined) {
                if (isBefore(date, new Date())) {
                  setDate(new Date());
                  Alert.alert('Escolha uma hora no futuro! ⏰');
                  return;
                }

                setDate(date);
              }
            }}
          />
        ) : null }

        <Button
          label='Cadastrar planta'
          onPress={async () => {
            try {
              await savePlant({
                ...plant,
                dateTimeNotification: date,
              });
            } catch {
              Alert.alert('Não foi possível cadastrar a planta. 😢');
              return;
            }

            navigation.navigate('Confirmation', {
              emoji: '🤗',
              title: 'Tudo certo',
              subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
              button: 'Muito obrigado :D',
              nextScreen: 'MyPlants',
            });
          }}
        />
      </View>
    </View>
  );
}


export { PlantSave };
