import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const SearchBar = ({ inputRef, onSearch }) => {
  const handleSearchTextChange = (text) => {
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} size={15} name="search" color="#E50914" />
      <TextInput
        cursorColor="#E50914"
        selectionColor="#fff"
        style={styles.input}
        placeholder="Search your content"
        placeholderTextColor="#E50914"
        ref={inputRef}
        onChangeText={handleSearchTextChange}
      />
    </View>
  );
};

export default SearchBar;
