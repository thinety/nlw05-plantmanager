import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    borderRadius: 20,
    marginVertical: 5,
  },

  button: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
  },

  details: {
    alignItems: 'flex-end',
  },

  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },

  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
});


export { styles };
