import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#141414',
        paddingBottom: 30
    },
    close: {
        position: "absolute",
        zIndex: 10,
        top: 40,
        right: 2,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 20,
        paddingBottom: 5,
        paddingHorizontal: 20,
    },
    image: {
        resizeMode: 'fit',
        height: 500,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderColor: '#E50914',
    },
    overview: {
        color: '#fff',
        fontSize: 10,
        paddingHorizontal: 20,
        paddingTop: 0,
        paddingBottom: 20,
        textAlign: "justify"
    },
    voteAverage: {
        color: '#fff',
        fontSize: 15,
        marginHorizontal: 20,
        alignSelf: "start",
        borderRadius: 10,
        marginBottom: 20,
    },
    voteCount: {
        color: 'whitesmoke',
        fontSize: 5,
        marginLeft: 30,
    },
    btn: {
        marginTop: 10,
        color: '#E50914',
        flexDirection: "row"
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30
    }
});

export default styles;