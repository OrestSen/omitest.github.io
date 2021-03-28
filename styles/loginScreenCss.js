import { StyleSheet } from 'react-native'

export const loginScreenCss = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eceded',
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",

    },
    formWrapper: {
        textAlign: 'center',
        width: '90%',
        alignItems: 'center'
    },
    formRow: {
        flexDirection: 'row',
        marginTop: 50,
        paddingBottom: 5,
        borderBottomWidth: 1,
        marginBottom: 20,
        width: "90%",
        borderColor: '#D0CAD9',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        borderBottomColor: '#a3a0a0',
        color: '#a3a0a0',
        paddingLeft: 10,

    },
    forgotPass: {
        color: '#00BFFF',
        fontWeight: '800',
    },
    signBtn: {
        backgroundColor: '#29b1e3',
        borderRadius: 25,
        marginVertical: 40,
        paddingVertical: 10,
        width: "90%",
        borderColor: '#009381',
        borderWidth: 1,
    },
    signText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    modal: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    modalView: {
        backgroundColor: '#aaa',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeText: {
        backgroundColor: '#333',
        color: '#bbb',
        padding: 10,
        margin: 10
    }
})