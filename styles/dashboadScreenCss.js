import { StyleSheet } from 'react-native'

export const dashboardScreenCss = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    dasboardWrapper: {
        textAlign: 'center'
    },
    logoutBtn: {
        backgroundColor: 'red',
        paddingVertical: 10,
        width: 100,
        alignSelf: 'center'
    },
    logoutBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})