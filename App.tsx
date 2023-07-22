import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import BreedDetails from './screens/BreedDetails';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AdditionalDetails from './screens/AdditionalDetails';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import RandomCat from './screens/RandomCat';

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

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.dark}>
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
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
