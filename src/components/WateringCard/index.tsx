import React from 'react';
import { View, Pressable, Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { styles } from './styles';


interface WateringCardProps {
  style?: StyleProp<ViewStyle>
  name: string;
  photo: string;
  hour: string;
  onPress: () => void;
}

function WateringCard({ style, name, photo, hour, onPress }: WateringCardProps) {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.button}
        android_ripple={{ borderless: true }}
        onPress={onPress}
      >
        <SvgFromUri
          uri={photo}
          width={50}
          height={50}
        />
        <Text style={styles.title}>
          {name}
        </Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Regar às
          </Text>
          <Text style={styles.time}>
            {hour}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}


export { WateringCard };
