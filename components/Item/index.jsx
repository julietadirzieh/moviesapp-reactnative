import { Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Item = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name={icon} size={20} color={colors.whitesmoke} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Item;
