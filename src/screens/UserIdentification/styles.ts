import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54,
  },

  emoji: {
    fontSize: 44,
  },

  title: {
    lineHeight: 32,
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 20,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    alignSelf: 'stretch',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  focusedInput: {
    borderColor: colors.green,
  },

  button: {
    marginTop: 40,
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
});


export { styles };
