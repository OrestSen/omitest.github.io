import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, Animated, Alert } from 'react-native'

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useRef } from "react";

import Header from '../components/header'
import TextMain from '../components/textMain'
import Buttons from '../components/socialNetworkingBtn'
import { loginScreenCss } from '../styles/loginScreenCss'


const LoginScreen = (props) => {

    const [data, setData] = React.useState({
        loading: false,
    })
    const [secureTextEntry, setSecureTextEnrty] = useState(true)
    const [check_textInputChange, setCheck_textInputChange] = useState(false)

    const textInputChange = (val) => {
        if (val.length != ' ') {
            setCheck_textInputChange({
                ...email, val,
                check_textInputChange: true
            });
        } else {
            setCheck_textInputChange({
                ...email, val,
                check_textInputChange: true,
            });
        }
    }

    const updateSecureTextEntry = () => {
        setSecureTextEnrty(!secureTextEntry)
    }

    const handlePasswordChange = (val) => {
        setPassword({
            ...password,
            password: val
        });
    }

    const handleSubmit = () => {
        console.log(emailRef.current, passwordRef.current);
    };

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const emailRef = React.useRef()
    const passwordRef = React.useRef()

    const signIn = async () => {
        await fetch('https://site.ualegion.com/api/v1/security/login', {
            method: 'POST',
            headers: {
                // 'Accept-Language': 'en',
                // 'Authorization': 'Bearer',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                "email": emailRef.current.value,
                // emailRef.current.value,
                "password": passwordRef.current.value,
                // passwordRef.current.value
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                console.warn(data);
                try {
                    await AsyncStorage.setItem('token', data.token);
                    if (data.token != undefined) {
                        props.navigation.navigate('App')
                    }
                } catch (e) {
                    console.error(`Error in catch`);
                }
            },
                err => {
                    alert('Email or password is wrong');
                    return err.json();
                })
    }

    return (
        <View
            style={loginScreenCss.container}>
            <Header>Увійдіть щоб продовжити</Header>
            <Buttons />
            <TextMain>або</TextMain>
            <View
                style={loginScreenCss.formWrapper}>
                <Animatable.View
                    style={loginScreenCss.footer}
                    animation="fadeInUpBig">
                    <View style={loginScreenCss.formRow}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            nativeID="emailID"
                            name="email"
                            style={loginScreenCss.textInput}
                            placeholder='Поштова скринька'
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            value={props.email}
                            ref={emailRef}
                            type="email"

                        />

                        {check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    <View
                        style={loginScreenCss.formRow}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            nativeID="password"
                            name="password"
                            style={loginScreenCss.textInput}
                            placeholder='Пароль'
                            autoCapitalize="none"
                            secureTextEntry={secureTextEntry ? true : false}
                            onChangeText={(val) => handlePasswordChange(val)}
                            value={props.password}
                            ref={passwordRef}
                            type="password"
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}>
                            {secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity >
                        <Text
                            style={loginScreenCss.forgotPass}
                        >Забули пароль?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginScreenCss.signBtn}
                        onPress={() => signIn()}
                        disabled={data.loading}
                    >
                        <Text style={loginScreenCss.signText}>{data.loading ? "Зачекайте..." : "Увійти"}</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </View>
    )
}

export default LoginScreen
