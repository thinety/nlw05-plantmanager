import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { styles } from './styles';


interface ButtonProps {
  label: string;
  style?: StyleProp<ViewStyle>
  onPress: () => void;
  disabled?: boolean;
}

function Button({ label, style, onPress, disabled = false }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}


export { Button };
