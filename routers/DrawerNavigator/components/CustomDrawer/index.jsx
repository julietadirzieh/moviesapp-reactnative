/* eslint-disable react/destructuring-assignment */
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./styles";
import Content from "../Content";

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.container}
      style={styles.container}
    >
      <Content />
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
