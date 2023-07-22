import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import StackNavigator from './src/screens/StackNavigator';
import { SWRConfig } from 'swr';
import { fetcher } from './src/api/api';

export default function App() {
  return (
    <SafeAreaProvider>
      <SWRConfig
        value={{
          fetcher: fetcher,
        }}
      >
        <ApplicationProvider {...eva} theme={eva.dark} mapping={eva.mapping}>
          <StackNavigator />
        </ApplicationProvider>
      </SWRConfig>
    </SafeAreaProvider>
  );
}
