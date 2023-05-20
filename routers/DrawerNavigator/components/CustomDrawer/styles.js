import { StyleSheet } from 'react-native';

const styles =
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#141414',
            paddingHorizontal: '20px',
        },
        drawerTopNav: {
            justifyContent: 'flex-start',
        },
        drawerUserInfo: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: '20px',
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            marginHorizontal: '20px',
        },
        drawerUserName: {
            color: '#fff',
            fontSize: 20,
        },
        drawerUserImage: {
            height: 40,
            width: 40,
            borderRadius: 60,
        },
        drawerNavItem: {
            paddingVertical: '20px',
            marginHorizontal: '20px',
        },
        drawerSupportInfo: {
            color: '#fff',
            justifyContent: 'flex-end',
            borderTopColor: '#fff',
            borderTopWidth: 1,
            marginHorizontal: '20px',
        },
        drawerText: {
            color: '#fff',
            marginTop: '20px',
        },
        drawerList: {
            marginTop: '0px',
            marginBottom: '10px',
            marginHorizontal: '20px',
        },
        drawerFirstItem: {
            color: '#fff',
            marginTop: '0px',
        },
        drawerSecondItem: {
            color: '#fff',
            marginTop: '10px',
            marginBottom: '2px',
        },
        text: {
            color: '#fff',
            marginVertical: '2px',
        },
        icon: {
            color: '#fff',
            paddingHorizontal: '2px',
        },
    });

export default styles;
