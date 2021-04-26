import React from 'react';
import { Animated, View, Pressable, Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import { colors } from '../../styles/colors';
import { styles } from './styles';


interface WateringCardProps {
  style?: StyleProp<ViewStyle>
  name: string;
  photo: string;
  hour: string;
  onPress: () => void;
  onRemove: () => void;
}

function WateringCard({ style, name, photo, hour, onPress, onRemove }: WateringCardProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View style={styles.removeButtonContainer}>
            <Pressable
              android_ripple={{ borderless: true }}
              style={styles.removeButton}
              onPress={onRemove}
            >
              <Feather
                name='trash'
                size={32}
                color={colors.white}
              />
            </Pressable>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  );
}


export { WateringCard };
