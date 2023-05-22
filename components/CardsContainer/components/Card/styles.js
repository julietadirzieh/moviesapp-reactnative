import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import { fp, wp, hp } from "../../../../theme/scale";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.whitesmoke,
        marginRight: wp(2),
    },
    image: {
        width: wp(28),
        height: hp(20),
        borderRadius: wp(2),
        borderWidth: 2,
        borderColor: colors.cadetBlue,
    },
});

export default styles;