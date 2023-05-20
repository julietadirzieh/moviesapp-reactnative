import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { options } from "./constants";
import Item from "../Item";

const Content = ({ closeDrawer }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(route);
    closeDrawer();
  };
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Item
          {...option}
          onPress={() => onPress(option.route)}
          key={option.route}
        />
      ))}
    </View>
  );
};

export default Content;
