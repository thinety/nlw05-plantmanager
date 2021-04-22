import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { androidRipple } from '../../styles/common';
import { styles } from './styles';


interface EnvironmentButtonProps {
  style?: StyleProp<ViewStyle>
  onPress: () => void;
  label: string;
  active?: boolean;
}

function EnvironmentButton({ style, onPress, label, active = false }: EnvironmentButtonProps) {
  return (
    <View style={[styles.container, active && styles.containerActive, style]}>
      <Pressable style={styles.button}
        android_ripple={androidRipple}
        onPress={onPress}
      >
        <Text style={[styles.label, active && styles.labelActive]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}


export { EnvironmentButton };
