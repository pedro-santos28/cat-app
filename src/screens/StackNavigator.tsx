import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import BreedDetails from './BreedDetails';
import RandomCat from './RandomCat';
import AdditionalDetails from './AdditionalDetails';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BreedDetails"
          component={BreedDetails}
          options={{ headerTitle: 'Detalhes da raça' }}
        />
        <Stack.Screen
          name="AdditionalDetails"
          component={AdditionalDetails}
          options={{ headerTitle: 'Detalhes adicionais' }}
        />
        <Stack.Screen
          name="RandomCat"
          component={RandomCat}
          options={{ headerTitle: 'Gatinho aleatório' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
