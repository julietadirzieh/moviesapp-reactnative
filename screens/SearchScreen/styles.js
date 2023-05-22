import { StyleSheet } from "react-native";
import { fp, hp, wp } from '../../theme/scale.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: hp(20),
        alignItems: "center",
        backgroundColor: "#141414",
    },
    columnWrapper: {
        justifyContent: "space-between",
        paddingVertical: hp(2),
    },
});

export default styles;