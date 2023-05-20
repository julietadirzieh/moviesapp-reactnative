import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import UserScreen from "../../screens/UserScreen/UserScreen";
import CustomDrawerContent from "./components/CustomDrawer";
import styles from "./styles";
import Logo from "./components/DrawerLogo";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        headerStyle: styles.headerStyle,
        headerShadowVisible: false,
        headerTitle: Logo,
        headerTitleAlign: "center",
        headerTintColor: "#E50914",
        drawerItemStyle: styles.drawerItemStyle,
        headerBackgroundContainerStyle: styles.headerStyle,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
