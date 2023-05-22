import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../../../theme/scale';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#141414',
        paddingBottom: hp(2)
    },
    close: {
        position: "absolute",
        zIndex: 10,
        top: 40,
        right: 10,
    },
    title: {
        color: '#fff',
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
        borderWidth: 1,
        borderColor: '#E50914',
    },
    overview: {
        color: '#fff',
        fontSize: fp(1.5),
        paddingHorizontal: hp(2),
        paddingTop: 0,
        paddingBottom: hp(2),
        textAlign: "justify"
    },
    voteAverage: {
        color: '#fff',
        fontSize: fp(1.5),
        marginHorizontal: wp(3),
        borderRadius: wp(2),
        marginBottom: hp(2),
    },
    voteCount: {
        color: 'whitesmoke',
        fontSize: fp(0.7),
        marginLeft: wp(3),
    },
    btn: {
        marginTop: hp(2),
        color: '#E50914',
        flexDirection: "row"
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: hp(2),
        gap: wp(4)
    }
});

export default styles;