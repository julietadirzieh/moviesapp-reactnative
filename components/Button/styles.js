import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: "center",
        alignSelf: "start",
        padding: 10,
        margin: 20,
        backgroundColor: "white",
    },
    outlinedContainer: {
        backgroundColor: "transparent",
        borderWidth: 1,
        padding: 10,
        borderColor: "#E50914",
    },
    text: {
        color: "#E50914",
        fontSize: 20,
        marginLeft: 2,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    outlinedText: {
        color: "#E50914",
        fontSize: 20,
        marginLeft: 2,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    icon: {
        fontSize: 20,
        color: "#E50914",
    },
});

export default styles;