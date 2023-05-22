import { Text, TextInput, View } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../theme/colors";

const FormInput = ({ label, error, icon, id, ...rest }) => {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.container}>
        <TextInput
          cursorColor={colors.whitesmoke}
          selectionColor={colors.green}
          style={styles.input}
          id={id}
          name={id}
          placeholderTextColor={colors.whitesmoke}
          {...rest}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

export default FormInput;
