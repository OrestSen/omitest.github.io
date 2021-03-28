import { StyleSheet } from 'react-native'

export const socialNetworkingBtnCss = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btnFacebook: {
        backgroundColor: '#1170D0',
        width: "45%",
        borderRadius: 6,
    },
    textF: {
        marginVertical: 15,
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
    btnGoogle: {
        backgroundColor: '#ffffff',
        width: "45%",
        fontSize: 5,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#C9CBD0'
    },
    textG: {
        marginVertical: 15,
        fontSize: 14,
        color: '#707070',
        textAlign: 'center',
        borderRadius: 25
    }
})