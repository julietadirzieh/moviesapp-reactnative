import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../../../theme/scale';
import colors from "../../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.whitesmoke,
        paddingBottom: hp(6)
    },
    close: {
        position: "absolute",
        zIndex: 10,
        top: 40,
        right: 10,
    },
    title: {
        color: colors.cadetBlue,
        fontSize: fp(3),
        fontWeight: "bold",
        paddingTop: hp(2),
        paddingBottom: hp(2),
        paddingHorizontal: wp(3),
    },
    image: {
        height: 500,
        width: "100%",
        borderTopLeftRadius: wp(5),
        borderTopRightRadius: wp(5),
    },
    overview: {
        color: colors.terra,
        fontSize: fp(1.5),
        paddingHorizontal: hp(2),
        paddingTop: 0,
        paddingBottom: hp(2),
        textAlign: "justify"
    },
    voteAverage: {
        color: colors.terra,
        fontSize: fp(1.5),
        paddingHorizontal: wp(3),
        borderRadius: wp(2),
        marginBottom: hp(2),
    },
    voteCount: {
        color: colors.terra,
        fontSize: fp(0.7),
        marginLeft: wp(3),
    },
    btn: {
        marginTop: hp(2),
        color: colors.cadetBlue,
        flexDirection: "row"
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: hp(2),
        gap: wp(4),
        marginHorizontal: wp(3),
    },
    text: {
        color: colors.whitesmoke,
        fontSize: fp(2),
        textAlign: "center"
    }
});

export default styles;