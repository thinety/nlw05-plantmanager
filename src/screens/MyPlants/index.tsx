import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import type { BottomTabNavigationOptions, MyPlantsProps } from '../../types/navigation';

import { Header } from '../../components/Header';

import { loadPlants, removePlant } from '../../services/storage';

import waterdropImg from '../../../assets/waterdrop.png';
import { styles } from './styles';
import { WateringCard } from '../../components/WateringCard';


type Plant = {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string,
  },
  time: string,
  dateTimeNotification: Date,
};

const myPlantsOptions: BottomTabNavigationOptions = {
  tabBarLabel: 'Minhas plantinhas',
  tabBarIcon: ({ size, color }) => (
    <MaterialIcons
      name='format-list-bulleted'
      size={size}
      color={color}
    />
  ),
};

function MyPlants({}: MyPlantsProps) {
  const [myPlants, setMyPlants] = useState<Plant[]>([]);

  let nextWatered = '';

  const nextWateredPlant = myPlants[0];
  if (nextWateredPlant !== undefined) {
    const nextTime = formatDistance(
      nextWateredPlant.dateTimeNotification.getTime(),
      new Date().getTime(),
      { locale: ptBR }
    );
    nextWatered = `Regue sua ${nextWateredPlant.name} daqui a ${nextTime}`;
  }

  useEffect(() => {
    (async () => {
      const plants = await loadPlants();
      setMyPlants(plants);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image
          source={waterdropImg}
          style={styles.spotlightImage}
        />

        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={plant => plant.id}
          renderItem={({ item: plant }) => (
            <WateringCard
              name={plant.name}
              photo={plant.photo}
              hour={plant.time}
              onPress={() => {}}
              onRemove={() => {
                Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
                  {
                    text: 'Não 🙏',
                    style: 'cancel',
                  },
                  {
                    text: 'Sim 😢',
                    onPress: async () => {
                      try {
                        await removePlant(plant.id);
                      } catch {
                        Alert.alert('Não foi possível remover a planta. 😢');
                        return;
                      }

                      const plants = await loadPlants();
                      setMyPlants(plants);
                    },
                  }
                ]);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </SafeAreaView>
  );
}


export { MyPlants, myPlantsOptions };
