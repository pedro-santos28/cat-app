import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import BreedDetails from "./screens/BreedDetails";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AdditionalDetails from "./screens/AdditionalDetails";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export type RootStackParamList = {
  Home: undefined;
  BreedDetails: {
    cat: models.ICat;
  };
  AdditionalDetails: {
    /*  vetStreetUrl: string;
    vcaHospitalsUrl: string;
    wikipediaUrl: string; */
    breeds: models.IBreed[] | undefined;
  };
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
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdditionalDetails"
              component={AdditionalDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
