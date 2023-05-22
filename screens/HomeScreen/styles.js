import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../theme/scale.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: hp(2),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#141414',
    },
    text: {
        color: '#fff',
    },
    title: {
        color: '#fff',
        fontSize: fp(2.5),
        fontWeight: 'bold',
        marginLeft: wp(4),
        marginTop: hp(2)
    },
    rowContainer: {
        flex: 1,
        marginVertical: hp(2),
    },
    scrollViewContent: {
        paddingBottom: hp(10),
    },
    indicator: {
        paddingBottom: hp(10),
    },
});

export default styles;
