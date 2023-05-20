import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#141414',
    },
    text: {
        color: '#fff',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10
    },
    rowContainer: {
        flex: 1,
        marginVertical: 20,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
});

export default styles;
