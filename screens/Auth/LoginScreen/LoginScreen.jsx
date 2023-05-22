import React from "react";
import { View, KeyboardAwareScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../../theme/colors";
import { useLoginUser } from "../../../hooks/useLoginUser";
import Button from "../../../components/Button";
import FormInput from "../../../components/FormInput";

const LoginScreen = () => {
  const { formik } = useLoginUser();

  return (
    <View style={styles.container}>
      <Ionicons
        name="logo-dribbble"
        size={200}
        color={colors.green}
        style={styles.icon}
      />

      <View style={styles.formContainer}>
        <FormInput
          autoCapitalize="none"
          label="Email"
          name="email"
          id="email"
          placeholder="Email"
          onChangeText={formik.handleChange("email")}
          value={formik.values.email}
          error={formik.errors.email}
        />

        <FormInput
          autoCapitalize="none"
          secureTextEntry
          label="Password"
          id="password"
          name="password"
          placeholder="Password"
          onChangeText={formik.handleChange("password")}
          value={formik.values.password}
          error={formik.errors.password}
        />

        <Button
          label="Iniciar sesión"
          onPress={formik.handleSubmit}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
