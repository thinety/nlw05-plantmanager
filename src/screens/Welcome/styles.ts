import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontFamily: fonts.heading,
    lineHeight: 34,
    textAlign: 'center',
    color: colors.heading,
  },

  image: {
    height: Dimensions.get('window').width * 0.7,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});


export { styles };
