import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../theme/scale.js';
import colors from "../../theme/colors.js";

const styles = StyleSheet.create({
    container: {
        borderRadius: fp(1.5),
        alignItems: "center",
        gap: wp(2),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(4),
        backgroundColor: "white",
    },
    outlinedContainer: {
        backgroundColor: "transparent",
        borderWidth: wp(0.2),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(4),
        borderColor: colors.red,
    },
    text: {
        color: colors.red,
        fontSize: fp(2),
        marginLeft: wp(4),
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    outlinedText: {
        color: colors.red,
        fontSize: fp(2),
        marginLeft: wp(4),
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    icon: {
        fontSize: fp(2),
        color: colors.red,
    },
});

export default styles;