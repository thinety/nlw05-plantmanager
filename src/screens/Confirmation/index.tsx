import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import type { ConfirmationProps } from '../../types/navigation';

import { Button } from '../../components/Button';

import { styles } from './styles';


function Confirmation({}: ConfirmationProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😁</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <Button
          style={styles.button}
          onPress={() => {}}
        >
          Começar
        </Button>
      </View>
    </SafeAreaView>
  );
}


export { Confirmation };
