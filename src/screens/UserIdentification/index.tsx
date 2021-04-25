import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Text, TextInput, Keyboard, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import type { UserIdentificationProps } from '../../types/navigation';

import { Button } from '../../components/Button';

import { styles } from './styles';


function UserIdentification({ navigation }: UserIdentificationProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState('');
  const isFilled = name !== '';

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.content}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Text style={styles.emoji}>
            { !isFilled ? '😀' : '😄' }
          </Text>
          <Text style={styles.title}>
            Como podemos {'\n'}
            chamar você?
          </Text>
          <TextInput
            style={[
              styles.input,
              (isFocused || isFilled) && styles.focusedInput,
            ]}
            placeholder='Digite um nome'
            onChangeText={(text) => {
              setName(text);
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          <Button
            style={styles.button}
            label='Confirmar'
            onPress={async () => {
              try {
                await AsyncStorage.setItem('@plantmanager:user', name);
              } catch {
                Alert.alert('Não foi possível salvar o seu nome. 😢');
                return;
              }

              navigation.navigate('Confirmation', {
                emoji: '😁',
                title: 'Prontinho',
                subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                button: 'Começar',
                nextScreen: 'PlantSelect',
              });
            }}
            disabled={!isFilled}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}


export { UserIdentification };
