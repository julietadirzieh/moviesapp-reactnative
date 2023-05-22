import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
        borderColor: colors.red,
        width: "100%",
        height: "100%",
    },
    cardsContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    title: {
        color: colors.white,
        fontSize: 30,
    },
    image: {
        width: 50,
        height: 50,
    },
    description: {
        color: colors.white,
        fontSize: 20,
    }
});

export default styles;