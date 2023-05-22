import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../../theme/scale.js';
import colors from "../../../theme/colors.js";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.violet,
    },
    text: {
        color: colors.whitesmoke,
        fontSize: fp(2),
        textAlign: "center"
    },
    title: {
        color: colors.terra,
        fontSize: fp(2.5),
        fontWeight: 'bold',
        marginLeft: wp(2),
        paddingBottom: hp(1)
    },
    rowContainer: {
        flex: 1,
        paddingVertical: hp(1),
        backgroundColor: colors.whitesmoke,
        paddingLeft: wp(2)
    },
    scrollViewContent: {
        paddingBottom: hp(6),
        paddingLeft: wp(1)
    },
    indicator: {
        paddingBottom: hp(10),
    },
    mainContainer: {
        flex: 1,
    },
    formContainer: {
        paddingHorizontal: wp(5),
        marginTop: hp(5),
    },
    mt: {
        marginTop: hp(5),
    },
    pr: {
        paddingRight: wp(5),
    },
    btn: {
        marginTop: hp(8),
    },
});

export default styles;
