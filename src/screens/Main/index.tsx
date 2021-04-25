import React from 'react';

import type { MainProps } from '../../types/navigation';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabsNavigatorParamList } from '../../types/navigation';
import { PlantSelect, plantSelectOptions } from '../../screens/PlantSelect';
import { MyPlants, myPlantsOptions } from '../../screens/MyPlants';

import { colors } from '../../styles/colors';


const MainTabs = createBottomTabNavigator<MainTabsNavigatorParamList>();

function Main({}: MainProps) {
  return (
    <MainTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          height: 68,
        },
      }}
    >
      <MainTabs.Screen
        name='PlantSelect'
        component={PlantSelect}
        options={plantSelectOptions}
      />
      <MainTabs.Screen
        name='MyPlants'
        component={MyPlants}
        options={myPlantsOptions}
      />
    </MainTabs.Navigator>
  );
}


export { Main };
