import { Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import { Feather } from '@expo/vector-icons';


const fontsObject = {
  Jost_600SemiBold,
  Jost_400Regular,
  ...Feather.font,
};

const fonts = {
  heading: 'Jost_600SemiBold',
  text: 'Jost_400Regular',
  complement: 'Jost_400Regular',
};


export { fontsObject, fonts };
