import type { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import type { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import type { BottomTabNavigationOptions, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


type RootStackNavigatorParamList = {
  Welcome: undefined,
  UserIdentification: undefined,
  Confirmation: {
    emoji: string,
    title: string,
    subtitle: string,
    button: string,
    nextScreen: keyof MainTabsNavigatorParamList,
  },
  PlantSave: {
    plant: {
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
    }
  },
  Main: undefined,
};

interface WelcomeProps {
  route: RouteProp<RootStackNavigatorParamList, 'Welcome'>;
  navigation: StackNavigationProp<RootStackNavigatorParamList, 'Welcome'>;
}

interface UserIdentificationProps {
  route: RouteProp<RootStackNavigatorParamList, 'UserIdentification'>;
  navigation: StackNavigationProp<RootStackNavigatorParamList, 'UserIdentification'>;
}

interface ConfirmationProps {
  route: RouteProp<RootStackNavigatorParamList, 'Confirmation'>;
  navigation: StackNavigationProp<RootStackNavigatorParamList, 'Confirmation'>;
}

interface PlantSaveProps {
  route: RouteProp<RootStackNavigatorParamList, 'PlantSave'>;
  navigation: StackNavigationProp<RootStackNavigatorParamList, 'PlantSave'>;
}

interface MainProps {
  route: RouteProp<RootStackNavigatorParamList, 'Main'>;
  navigation: StackNavigationProp<RootStackNavigatorParamList, 'Main'>;
}


type MainTabsNavigatorParamList = {
  PlantSelect: undefined,
  MyPlants: undefined,
};

interface PlantSelectProps {
  route: RouteProp<MainTabsNavigatorParamList, 'PlantSelect'>;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<MainTabsNavigatorParamList, 'PlantSelect'>,
    StackNavigationProp<RootStackNavigatorParamList, 'Main'>
  >;
}

interface MyPlantsProps {
  route: RouteProp<MainTabsNavigatorParamList, 'MyPlants'>;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<MainTabsNavigatorParamList, 'MyPlants'>,
    StackNavigationProp<RootStackNavigatorParamList, 'Main'>
  >;
}


export type {
  RootStackNavigatorParamList,
  StackNavigationOptions,
  WelcomeProps,
  UserIdentificationProps,
  ConfirmationProps,
  PlantSaveProps,
  MainProps,

  MainTabsNavigatorParamList,
  BottomTabNavigationOptions,
  PlantSelectProps,
  MyPlantsProps,
};
