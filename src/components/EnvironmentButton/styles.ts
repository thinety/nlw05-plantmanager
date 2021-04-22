import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    borderRadius: 12,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    color: colors.heading,
    fontFamily: fonts.text,
  },

  labelActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});


export { styles };
