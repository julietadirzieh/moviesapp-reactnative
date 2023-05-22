import { StyleSheet } from 'react-native';
import { fp, hp, wp } from '../../theme/scale';

const styles =
    StyleSheet.create({
        input: {
            backgroundColor: "#141414",
            color: "#E50914",
            width: '90%',
            paddingVertical: hp(1),
            paddingHorizontal: wp(2),
            borderRadius: wp(2),
            borderColor: "#E50914",
            borderWidth: 1
        },
        container: {
            backgroundColor: "#141414",
            paddingHorizontal: wp(8),
            borderRadius: wp(2),
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
        },
        icon: {
            paddingRight: wp(2),
        },
    });

export default styles;
