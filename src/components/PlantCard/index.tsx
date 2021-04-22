import React from 'react';
import { View, Pressable, Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { androidRipple } from '../../styles/common';
import { styles } from './styles';


interface PlantCardProps {
  style?: StyleProp<ViewStyle>
  name: string;
  photo: string;
  onPress: () => void;
}

function PlantCard({ style, name, photo, onPress }: PlantCardProps) {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.button}
        android_ripple={androidRipple}
        onPress={onPress}
      >
        <SvgFromUri
          uri={photo}
          width={70}
          height={70}
        />
        <Text style={styles.text}>
          {name}
        </Text>
      </Pressable>
    </View>
  );
}


export { PlantCard };
