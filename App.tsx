import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import StackNavigator from './src/screens/StackNavigator';
import { SWRConfig } from 'swr';
import { fetcher } from './src/api/api';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
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
