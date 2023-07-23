import Home from './Home';
import BreedDetails from './BreedDetails';
import RandomCat from './RandomCat';
import AdditionalDetails from './AdditionalDetails';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeHeader from '../components/Home/HomeHeader';
import ButtonRandomCat from '../components/Home/ButtonRandomCat';

export type RootStackParamList = {
  Home: undefined;
  BreedDetails: {
    cat: models.ICat;
  };
  AdditionalDetails: {
    breeds: models.IBreed[] | undefined;
  };
  RandomCat: undefined;
};

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: {
          backgroundColor: '#e0e0e6',
        },
        headerStyle: {
          backgroundColor: '#1e3a8a',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'left',
          headerLeft: () => <HomeHeader />,
          headerRight: () => <ButtonRandomCat />,
        }}
      />
      <Stack.Screen
        name="BreedDetails"
        component={BreedDetails}
        options={{
          headerTitle: 'Detalhes da raça',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="AdditionalDetails"
        component={AdditionalDetails}
        options={{
          headerTitle: 'Detalhes adicionais',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="RandomCat"
        component={RandomCat}
        options={{ headerTitle: 'Gatinho aleatório 🐈' }}
      />
    </Stack.Navigator>
  );
}
