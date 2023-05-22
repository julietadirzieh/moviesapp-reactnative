import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import UserScreen from "../../screens/UserScreen/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "../StackNavigator";
import colors from "../../theme/colors";

const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      sceneContainerStyle={{ backgroundColor: colors.whitesmoke }}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colors.green,
          borderTopColor: colors.green,
          borderTopWidth: 3,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={StackNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" size={30} color={colors.whitesmoke} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="search" size={30} color={colors.whitesmoke} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="person-circle-outline"
              size={30}
              color={colors.whitesmoke}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
