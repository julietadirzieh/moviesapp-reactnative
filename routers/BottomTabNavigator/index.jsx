import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import UserScreen from "../../screens/UserScreen/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "../StackNavigator";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      sceneContainerStyle={{ backgroundColor: "#141414" }}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#141414",
          borderTopColor: "#E50914",
          borderTopWidth: 1,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={StackNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" size="30px" color="#E50914" />
          ),
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="search" size="30px" color="#E50914" />
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
              size="30px"
              color="#E50914"
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
