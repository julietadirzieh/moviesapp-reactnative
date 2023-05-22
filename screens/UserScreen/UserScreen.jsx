import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../theme/colors";

const UserScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Ionicons name="person-circle-outline" size={200} color={colors.red} />
      <Text></Text>
    </ScrollView>
  );
};

export default UserScreen;
