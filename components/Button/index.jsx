import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const Button = ({ icon, label, onPress, style: propsStyles, outlined }) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];
  if (outlined) {
    containerStyles.push(styles.outlinedContainer);
    textStyles.push(styles.outlinedText);
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[containerStyles, propsStyles]}
      activeOpacity={0.5}
    >
      <Ionicons name={icon} style={styles.icon} />
      {label && <Text style={textStyles}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
