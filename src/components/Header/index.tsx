import React from 'react';
import { View, Text, Image } from 'react-native';

import avatarImg from '../../../assets/avatar.png';

import { styles } from './styles';


interface HeaderProps {

}

function Header({}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>Thiago</Text>
      </View>
      <Image style={styles.image} source={avatarImg} />
    </View>
  );
}


export { Header };
