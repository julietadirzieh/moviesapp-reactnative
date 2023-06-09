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
        size={25}
        name="search"
        color={colors.cadetBlue}
      />
      <TextInput
        cursorColor={colors.violet}
        selectionColor={colors.violet}
        style={styles.input}
        placeholder="Search your content"
        placeholderTextColor={colors.terra}
        ref={inputRef}
        onChangeText={handleSearchTextChange}
      />
    </View>
  );
};

export default SearchBar;
