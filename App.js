import BottomTabNavigator from './routers/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomTabNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

