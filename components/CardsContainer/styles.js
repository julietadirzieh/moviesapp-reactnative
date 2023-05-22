import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fp, wp, hp } from "../../theme/scale";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.whitesmoke,
        borderColor: colors.cadetBlue,
    },
    cardsContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp(2),
        paddingBottom: hp(2)
    }
});

export default styles;