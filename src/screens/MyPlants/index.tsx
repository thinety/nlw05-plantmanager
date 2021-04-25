import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import type { BottomTabNavigationOptions, MyPlantsProps } from '../../types/navigation';

import { Header } from '../../components/Header';

import { loadPlants } from '../../services/storage';

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
};

const myPlantsOptions: BottomTabNavigationOptions = {
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
  const [nextWatered, setNextWatered] = useState('');

  useEffect(() => {
    (async () => {
      const plants = await loadPlants();

      setMyPlants(plants);

      const nextWateredPlant = plants[0];

      const nextTime = formatDistance(
        nextWateredPlant.dateTimeNotification.getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );

      setNextWatered(
        `Regue sua ${nextWateredPlant.name} daqui a ${nextTime}`
      );
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
          // bug here: id is not unique if the same
          // plant is registered twice
          keyExtractor={plant => plant.id}
          renderItem={({ item: plant }) => (
            <WateringCard
              name={plant.name}
              photo={plant.photo}
              hour={plant.time}
              onPress={() => {}}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </SafeAreaView>
  );
}


export { MyPlants, myPlantsOptions };
