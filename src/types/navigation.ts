import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';


type RootStackNavigatorParamList = {
  Welcome: undefined,
  UserIdentification: undefined,
  Confirmation: undefined,
  PlantSelect: undefined,
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

interface PlantSelectProps {
  route: RouteProp<RootStackNavigatorParamList, 'PlantSelect'>;
  navigation: StackNavigationProp<RootStackNavigatorParamList, 'PlantSelect'>;
}


export type {
  RootStackNavigatorParamList,
  StackNavigationOptions,
  WelcomeProps,
  UserIdentificationProps,
  ConfirmationProps,
  PlantSelectProps
};
