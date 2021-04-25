import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import avatarImg from '../../../assets/avatar.png';

import { styles } from './styles';


interface HeaderProps {

}

function Header({}: HeaderProps) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    (async () => {
      setUsername(await AsyncStorage.getItem('@plantmanager:user') ?? '');
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image style={styles.image} source={avatarImg} />
    </View>
  );
}


export { Header };
