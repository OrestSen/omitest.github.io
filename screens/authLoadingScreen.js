import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { authLoadingScreenCss } from '../styles/authLoadingScreenCss'


const AuthLoadingScreen = () => {
    return (
        <View style={authLoadingScreenCss.container}>
            <ActivityIndicator />
        </View>
    )
}

export default AuthLoadingScreen

