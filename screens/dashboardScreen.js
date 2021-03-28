import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { dashboardScreenCss } from '../styles/dashboadScreenCss'

const DashboardScreen = (props) => {
    return (
        <View style={dashboardScreenCss.container}>
            <View style={dashboardScreenCss.dasboardWrapper}>
                <Text style={dashboardScreenCss.userText}>Hey User</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={dashboardScreenCss.logoutBtn}
                    onPress={() => props.navigation.navigate('Auth')}>
                    <Text
                        style={dashboardScreenCss.logoutBtnText}
                    >Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DashboardScreen
