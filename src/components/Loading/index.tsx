import React from 'react';
import { View } from 'react-native'
import LottieView from 'lottie-react-native';

import loadingAnimation from '../../../assets/load.json';

import { styles } from './styles';


function Loading() {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={loadingAnimation}
        autoPlay
        loop
      />
    </View>
  );
}


export { Loading };
