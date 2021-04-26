import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import type { BottomTabNavigationOptions, PlantSelectProps } from '../../types/navigation';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { PlantCard } from '../../components/PlantCard';
import { Loading } from '../../components/Loading';

import { api } from '../../services/api';

import { colors } from '../../styles/colors';
import { styles } from './styles';


type Environment = {
  key: string,
  title: string,
};
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
};

const plantSelectOptions: BottomTabNavigationOptions = {
  tabBarLabel: 'Nova planta',
  tabBarIcon: ({ size, color }) => (
    <MaterialIcons
      name='add-circle-outline'
      size={size}
      color={color}
    />
  ),
};

function PlantSelect({ navigation }: PlantSelectProps) {
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [loadingEnvironments, setLoadingEnvironments] = useState(true);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loadingPlants, setLoadingPlants] = useState(true);
  const [plantsPage, setPlantsPage] = useState(1);
  const [loadedAllPlants, setLoadedAllPlants] = useState(false);

  const [selectedEnvironment, setSelectedEnvironment] = useState('all');
  const filteredPlants = selectedEnvironment === 'all' ? plants :
    plants.filter(plant => plant.environments.includes(selectedEnvironment));

  useEffect(() => {
    (async () => {
      const response = await api({
        method: 'get',
        url: '/plants_environments',
        params: {
          _sort: 'title',
        },
      });

      setEnvironments([{
        key: 'all', title: 'Todos',
      }, ...response.data]);

      setLoadingEnvironments(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await api({
        method: 'get',
        url: '/plants',
        params: {
          _sort: 'name',
          _page: plantsPage,
          _limit: 8,
        },
      });

      if (response.data.length > 0) {
        setPlants(plants => [...plants, ...response.data]);
      } else {
        setLoadedAllPlants(true);
      }

      setLoadingPlants(false);
    })();

    return () => {
      setLoadingPlants(true);
    };
  }, [plantsPage]);

  if (loadingEnvironments || loadingPlants && plantsPage === 1) {
    return (
      <Loading />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Text style={styles.title}>Em qual ambiente</Text>
      <Text style={styles.subtitle}>você quer colocar sua planta?</Text>

      <View style={styles.environmentList}>
        <ScrollView
          contentContainerStyle={styles.environmentListContentContainer}
          horizontal showsHorizontalScrollIndicator={false}
        >
          { environments.map(environment => (
            <EnvironmentButton
              key={environment.key}
              style={styles.environmentButton}
              label={environment.title}
              onPress={() => {
                setSelectedEnvironment(environment.key);
              }}
              active={environment.key === selectedEnvironment}
            />
          )) }
        </ScrollView>
      </View>

      <View style={styles.plantList}>
        <FlatList
          contentContainerStyle={styles.plantListContentContainer}
          showsVerticalScrollIndicator={false}
          data={filteredPlants}
          keyExtractor={plant => plant.id}
          renderItem={({ item: plant }) => (
            <PlantCard
              style={styles.plantCard}
              name={plant.name}
              photo={plant.photo}
              onPress={() => {
                navigation.navigate('PlantSave', { plant });
              }}
            />
          )}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (loadingPlants || loadedAllPlants) return;

            setPlantsPage(page => page + 1);
          }}
          ListFooterComponent={ loadingPlants ? (
            <ActivityIndicator color={colors.green} />
          ) : null }
        />
      </View>
    </SafeAreaView>
  );
}


export { PlantSelect, plantSelectOptions };
