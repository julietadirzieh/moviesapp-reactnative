import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../theme/scale.js';
import colors from "../../theme/colors.js";

const styles = StyleSheet.create({
    container: {
        borderRadius: fp(1.5),
        alignItems: "center",
        gap: wp(2),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(3),
        backgroundColor: colors.cadetBlue,

    },
    outlinedContainer: {
        backgroundColor: "transparent",
        borderWidth: wp(0.2),
        paddingVertical: hp(1.3),
        paddingHorizontal: wp(3),
        borderColor: colors.violet,
        borderWidth: wp(0.5)
    },
    text: {
        color: colors.whitesmoke,
        fontSize: fp(2),
        marginLeft: wp(4),
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    outlinedText: {
        color: colors.violet,
        fontSize: fp(2),
        marginLeft: wp(4),
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    icon: {
        fontSize: fp(2),
        color: colors.whitesmoke,
    },
    outlinedIcon: {
        color: colors.violet,
        fontSize: fp(2),
    },
});

export default styles;