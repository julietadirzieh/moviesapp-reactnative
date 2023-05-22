import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
        width: 120,
        marginRight: 10,
    },
    title: {
        color: colors.white,
        fontSize: 30,
    },
    image: {
        width: 120,
        height: 180,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.red,
    },
    description: {
        color: colors.white,
        fontSize: 20,
    }
});

export default styles;