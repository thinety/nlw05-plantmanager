import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';
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
  const nextTime = plant.dateTimeNotification;
  const now = new Date();

  const { times, repeat_every } = plant.frequency;
  if (repeat_every === 'week') {
    const interval = Math.trunc(7 / times);
    nextTime.setDate(now.getDate() + interval);
  }
  else {
    nextTime.setDate(now.getDate() + 1);
  }

  const seconds = Math.abs(Math.ceil((now.getTime() - nextTime.getTime()) / 1000));

  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Heeey, 🌱',
      body: `Está na hora de cuidar da sua ${plant.name}`,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      data: {
        plant,
      },
    },
    trigger: {
      seconds: seconds < 60 ? 60 : seconds,
      repeats: true,
    },
  });

  const oldData = await AsyncStorage.getItem('@plantmanager:plants') ?? '{}';

  const oldPlants = JSON.parse(oldData);
  const newPlants = {
    ...oldPlants,
    [plant.id]: {
      data: plant,
      notificationId,
    },
  };

  const newData = JSON.stringify(newPlants);

  await AsyncStorage.setItem('@plantmanager:plants', newData);
}

async function removePlant(plantId: string) {
  const oldData = await AsyncStorage.getItem('@plantmanager:plants') ?? '{}';

  const plants = JSON.parse(oldData);

  await Notifications.cancelScheduledNotificationAsync(plants[plantId].notificationId);
  delete plants[plantId];

  const newData = JSON.stringify(plants);

  await AsyncStorage.setItem('@plantmanager:plants', newData);
}

async function loadPlants() {
  const data = await AsyncStorage.getItem('@plantmanager:plants') ?? '{}';

  const plants: { [id: string]: { data: Plant, notificationId: string } } = JSON.parse(data);

  return Object.keys(plants)
    .map(plantId => ({
      ...plants[plantId].data,
    }))
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


export { savePlant, removePlant, loadPlants };
