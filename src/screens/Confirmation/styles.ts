import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  emoji: {
    fontSize: 78,
  },

  title: {
    lineHeight: 38,
    fontSize: 22,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 40,
  },

  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    textAlign: 'center',
    paddingVertical: 10,
  },

  button: {
    marginTop: 20,
    alignSelf: 'stretch',
    marginHorizontal: 50,
  },
});


export { styles };
