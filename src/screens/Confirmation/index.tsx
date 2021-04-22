import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { ConfirmationProps } from '../../types/navigation';

import { Button } from '../../components/Button';

import { styles } from './styles';


function Confirmation({ navigation }: ConfirmationProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>😁</Text>
      <Text style={styles.title}>Prontinho</Text>
      <Text style={styles.subtitle}>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
      </Text>
      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate('PlantSelect');
        }}
      >
        Começar
      </Button>
    </SafeAreaView>
  );
}


export { Confirmation };
