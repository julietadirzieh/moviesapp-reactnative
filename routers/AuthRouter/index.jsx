import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/Auth/LoginScreen/LoginScreen";
import colors from "../../theme/colors";
import AppNavigator from "../AppNavigator";

const Stack = createStackNavigator();
const AuthRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.green },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeTab" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default AuthRouter;
