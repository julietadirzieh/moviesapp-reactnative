import { StyleSheet } from 'react-native';
import { fp, hp, wp } from '../../theme/scale';
import colors from '../../theme/colors';

const styles =
    StyleSheet.create({
        input: {
            backgroundColor: colors.background,
            color: colors.red,
            width: '90%',
            paddingVertical: hp(1),
            paddingHorizontal: wp(2),
            borderRadius: wp(2),
            borderColor: colors.red,
            borderWidth: 1
        },
        container: {
            backgroundColor: colors.background,
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
