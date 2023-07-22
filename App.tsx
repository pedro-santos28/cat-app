import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import StackNavigator from './src/screens/StackNavigator';
import { SWRConfig } from 'swr';
import { fetcher } from './src/api/api';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.dark} mapping={eva.mapping}>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </SWRConfig>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
