import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../theme/scale.js';
import colors from "../../theme/colors.js";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.whitesmoke,
    },
    columnWrapper: {
        paddingVertical: hp(1),
        width: "100%",
        backgroundColor: colors.whitesmoke,
        paddingHorizontal: wp(2),
    },

});

export default styles;