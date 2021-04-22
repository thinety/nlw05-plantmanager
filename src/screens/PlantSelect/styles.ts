import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },

  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },

  environmentList: {
    marginHorizontal: -30,
    marginVertical: 30,
  },

  environmentListContentContainer: {
    paddingHorizontal: 25,
  },

  environmentButton: {
    marginHorizontal: 5,
  },

  plantList: {
    flex: 1,
    marginHorizontal: -10,
  },

  plantListContentContainer: {
    paddingBottom: 10,
  },

  plantCard: {
    margin: 10,
  },
});


export { styles };
