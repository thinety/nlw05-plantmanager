import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import type { WelcomeProps } from '../../types/navigation';

import wateringImg from '../../assets/watering.png';
import { styles } from './styles';


function Welcome({ navigation }: WelcomeProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>
        <TouchableOpacity style={styles.button}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('UserIdentification');
          }}
        >
          <Feather name='chevron-right' style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export { Welcome };
