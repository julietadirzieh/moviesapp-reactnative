import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import MovieDetailsScreen from "../../screens/MovieDetailsScreen/MovieDetailsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#141414",
          borderWidth: 0,
        },
        headerTintColor: "fff",
      }}
      name=" "
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
