import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../theme/scale.js';

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
        borderColor: "#E50914",
    },
    text: {
        color: "#E50914",
        fontSize: fp(2),
        marginLeft: wp(4),
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    outlinedText: {
        color: "#E50914",
        fontSize: fp(2),
        marginLeft: wp(4),
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    icon: {
        fontSize: fp(2),
        color: "#E50914",
    },
});

export default styles;