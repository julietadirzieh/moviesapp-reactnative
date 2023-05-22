import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../theme/colors";
import Item from "../../components/Item";
import { useLoginUser } from "../../hooks/useLoginUser";

const UserScreen = () => {
  const { handleLogout } = useLoginUser();
  const handleOnHelp = () => {
    console.log("TODO: help");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Ionicons
          name="person-circle-outline"
          size={200}
          color={colors.green}
          style={styles.icon}
        />
        <Text style={styles.username}>@username</Text>
        <Text style={styles.name}>First Name</Text>
        <Text style={styles.subscription}>
          Subscription expiring 10/10/2025
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Item label="Settings" icon="settings-outline" onPress={handleOnHelp} />
        <Item label="Logout" icon="exit-outline" onPress={handleLogout} />
      </View>
    </ScrollView>
  );
};

export default UserScreen;
