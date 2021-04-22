import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Text, TextInput, Keyboard, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { UserIdentificationProps } from '../../types/navigation';

import { Button } from '../../components/Button';

import { styles } from './styles';


function UserIdentification({ navigation }: UserIdentificationProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState('');
  const isFilled = name !== '';

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.content}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Text style={styles.emoji}>
            { !isFilled ? '😀' : '😄' }
          </Text>
          <Text style={styles.title}>
            Como podemos {'\n'}
            chamar você?
          </Text>
          <TextInput
            style={[
              styles.input,
              (isFocused || isFilled) && styles.focusedInput,
            ]}
            placeholder='Digite um nome'
            onChangeText={(text) => {
              setName(text);
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('Confirmation');
            }}
            disabled={!isFilled}
          >
            Confirmar
          </Button>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}


export { UserIdentification };
