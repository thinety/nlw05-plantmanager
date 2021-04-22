import React from 'react';

import { useFonts } from 'expo-font';
import { fontsObject } from './styles/fonts';

import AppLoading from 'expo-app-loading';

import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import type { RootStackNavigatorParamList, StackNavigationOptions } from './types/navigation';
import { Welcome } from './screens/Welcome';
import { UserIdentification } from './screens/UserIdentification';
import { Confirmation } from './screens/Confirmation';
import { PlantSelect } from './screens/PlantSelect';

import { colors } from './styles/colors';


const RootStack = createStackNavigator<RootStackNavigatorParamList>();
const rootStackScreenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: colors.white,
  },
};

function App() {
  const [fontsLoaded] = useFonts(fontsObject);
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Welcome'
          screenOptions={rootStackScreenOptions}
        >
          <RootStack.Screen
            name='Welcome'
            component={Welcome}
          />
          <RootStack.Screen
            name='UserIdentification'
            component={UserIdentification}
          />
          <RootStack.Screen
            name='Confirmation'
            component={Confirmation}
          />
          <RootStack.Screen
            name='PlantSelect'
            component={PlantSelect}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export { App };
