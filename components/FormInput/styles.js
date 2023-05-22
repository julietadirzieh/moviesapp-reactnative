import { StyleSheet } from 'react-native';
import { hp, wp } from '../../theme/scale';
import colors from '../../theme/colors';

const styles =
    StyleSheet.create({
        input: {
            backgroundColor: colors.whitesmoke,
            color: colors.violet,
            width: '100%',
            height: hp(5.5),
            paddingVertical: hp(2),
            borderRadius: wp(2),
        },
        container: {
            backgroundColor: colors.whitesmoke,
            paddingHorizontal: wp(5),
            borderRadius: wp(2),
            flexDirection: 'row',
            alignItems: 'center',
            gap: wp(2),
        },
        label: {
            color: colors.whitesmoke,
            marginTop: hp(2),
            marginBottom: hp(0.5),
        },
        error: {
            color: colors.whitesmoke,
            marginTop: hp(0.5),
            textAlign: 'right',
        },
    });

export default styles;
