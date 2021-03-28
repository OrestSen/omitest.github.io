import { StyleSheet } from 'react-native'

export const textMainCss = StyleSheet.create({
    container: {
        display: 'flex',
        textAlign: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        width: '25%',
        height: 1,
        backgroundColor: '#D0CAD9',
    },
    text: {
        width: 40,
        textAlign: 'center',
        color: '#909090'
    }
})