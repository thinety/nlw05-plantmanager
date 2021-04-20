import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});


export { styles };
