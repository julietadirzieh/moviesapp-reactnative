import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#141414",
        borderColor: "#E50914",
        width: "100%",
        height: "100%",
    },
    cardsContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    title: {
        color: '#fff',
        fontSize: 30,
    },
    image: {
        width: 50,
        height: 50,
    },
    description: {
        color: '#fff',
        fontSize: 20,
    }
});

export default styles;