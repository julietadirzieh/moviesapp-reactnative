import AppNavigator from './routers/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthSwitch from './routers/AuthSwitcher';

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthSwitch />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

