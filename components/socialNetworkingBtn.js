import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import firebase from 'firebase'
import { socialNetworkingBtnCss } from '../styles/socialNetworkingBtnCss'
export default class Buttons extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            password: ''
        })
    }
    signUpUser = (email, password) => {
        try {
            if (this.state.password.length < 6) {
                alert('Please enter')
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.warn(error.toString())
        }
    }

    ShowToast = () => {
        Alert.alert('Привіт, тепер?')
    }
    ShowToastF = () => {
        Alert.alert('Привіт, зараз?')
    }
    render() {
        return (
            <View style={socialNetworkingBtnCss.container}>
                <View style={socialNetworkingBtnCss.btnFacebook}>
                    <TouchableOpacity
                        onPress={this.ShowToastF}>
                        <Text style={socialNetworkingBtnCss.textF}>
                            Facebook
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={socialNetworkingBtnCss.btnGoogle}>
                    <TouchableOpacity
                        onPress={this.ShowToast}>
                        <Text style={socialNetworkingBtnCss.textG}>
                            Google
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

