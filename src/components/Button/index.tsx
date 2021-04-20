import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { styles } from './styles';


interface ButtonProps {
  children: string;
  style?: StyleProp<ViewStyle>
  onPress: () => void;
  disabled?: boolean;
}

function Button({ children, style, onPress, disabled = false }: ButtonProps) {
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
        {children}
      </Text>
    </TouchableOpacity>
  );
}


export { Button };
