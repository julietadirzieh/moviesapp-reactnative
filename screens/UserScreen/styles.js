import { StyleSheet } from "react-native";
import { hp, fp } from "../../theme/scale";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: hp(10),
        backgroundColor: colors.whitesmoke,
        alignItems: "center",
        justifyContent: "space-between"
    },
    username: {
        paddingVertical: hp(1),
        color: colors.violet,
        fontSize: fp(3),
        fontWeight: "bold",
        textAlign: "center",
    },
    name: {
        color: colors.violet,
        fontSize: fp(2),
        textAlign: "center",
    },
    subscription: {
        color: colors.violet,
        fontSize: fp(1.5),
        paddingVertical: hp(1),
        textAlign: "center",
    },
});

export default styles;