import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { ConfirmationProps } from '../../types/navigation';

import { Button } from '../../components/Button';

import { styles } from './styles';


function Confirmation({ route, navigation }: ConfirmationProps) {
  const { emoji, title, subtitle, button, nextScreen } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Button
        style={styles.button}
        label={button}
        onPress={() => {
          navigation.navigate('Main', {
            screen: nextScreen
          } as unknown as undefined);
        }}
      />
    </SafeAreaView>
  );
}


export { Confirmation };
