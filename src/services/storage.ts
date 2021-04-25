import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from 'date-fns';


type Plant = {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string,
  },
  dateTimeNotification: Date,
};

async function savePlant(plant: Plant) {
  const oldData = await AsyncStorage.getItem('@plantmanager:plants') ?? '[]';

  const oldPlants: Plant[] = JSON.parse(oldData);
  const newPlants = [plant, ...oldPlants];

  const newData = JSON.stringify(newPlants);

  await AsyncStorage.setItem('@plantmanager:plants', newData);
}

async function loadPlants() {
  const data = await AsyncStorage.getItem('@plantmanager:plants') ?? '[]';

  const plants: Plant[] = JSON.parse(data);

  return plants
    .map(plant => ({
      ...plant,
      dateTimeNotification: new Date(plant.dateTimeNotification),
      time: format(new Date(plant.dateTimeNotification), 'HH:mm'),
    }))
    .sort((a, b) =>
      Math.floor(
        (a.dateTimeNotification.getTime() - b.dateTimeNotification.getTime()) / 1000
      )
    );
}


export { savePlant, loadPlants };
