import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../theme/colors";

const SearchBar = ({ inputRef, onSearch }) => {
  const handleSearchTextChange = (text) => {
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.icon}
        size={20}
        name="search"
        color={colors.red}
      />
      <TextInput
        cursorColor={colors.red}
        selectionColor={colors.white}
        style={styles.input}
        placeholder="Search your content"
        placeholderTextColor={colors.red}
        ref={inputRef}
        onChangeText={handleSearchTextChange}
      />
    </View>
  );
};

export default SearchBar;
