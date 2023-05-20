import { Image } from "react-native";
import styles from "./styles";

const Logo = () => {
  return (
    <Image
      source={{
        uri: "https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png",
      }}
      style={styles.logo}
    />
  );
};

export default Logo;
