import { StyleSheet } from 'react-native';
import { fp, hp, wp } from '../../theme/scale';
import colors from '../../theme/colors';

const styles =
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingVertical: hp(1),
            marginVertical: hp(1),
            gap: wp(2.5),
            alignItems: 'center',
            backgroundColor: colors.cadetBlue,
            paddingHorizontal: wp(4),
            borderRadius: wp(2)
        },
        text: {
            fontSize: fp(1.8),
            color: colors.whitesmoke,
        },
    });

export default styles;
