import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },

  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  },

  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },

  plantDetails: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10,
  },

  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
  },

  tipImage: {
    width: 56,
    height: 56,
  },

  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify',
  },

  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },

  timePickerContainer: {
    backgroundColor: colors.green_light,
    borderRadius: 20,

    marginVertical: 30,
    alignSelf: 'center',
  },

  timePickerButton: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  timePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.heading,
  },
});


export { styles };
