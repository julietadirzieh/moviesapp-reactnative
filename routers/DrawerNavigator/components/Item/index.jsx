import { Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Item = ({ iconName, label, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name={iconName} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
