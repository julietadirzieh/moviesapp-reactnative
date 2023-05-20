import { StyleSheet } from 'react-native';

const styles =
    StyleSheet.create({
        input: {
            backgroundColor: "#141414",
            color: "#E50914",
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 20,
            borderColor: "#E50914",
            borderWidth: 1
        },
        container: {
            backgroundColor: "#141414",
            paddingHorizontal: 30,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
        },
        icon: {
            paddingRight: 10,
        },
    });

export default styles;
