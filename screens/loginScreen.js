import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, Animated, Alert } from 'react-native'

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

import Header from '../components/header'
import TextMain from '../components/textMain'
import Buttons from '../components/socialNetworkingBtn'
import { loginScreenCss } from '../styles/loginScreenCss'
import { set } from 'react-native-reanimated';
// import simpleModal from '../components/simpleModal'

const LoginScreen = (props) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        loading: false,
        check_textInputChange: false,
        secureTextEntry: true,
        showMe: false,
    })

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        }
    }

    // const [showModal, setShowModal] = usetState(false)

    const openModal = () => {
        console.warn('Open modal')
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        await fetch('https://site.ualegion.com/swagger-ui.html', {
            method: 'POST',
            headers: {
                'Accept-Language': 'en',
                'Authorization': 'Bearer',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": "eresid@gmail.com",
                "password": 11111
            })
        }).then(
            res => {
                setData({
                    loading: false
                })
                props.navigation.navigate('App')
                console.warn(res);
            },
            err => {
                setData({
                    loading: false
                })
                alert('Email or password is wrong')
            }
        )
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
                            name="email"
                            style={loginScreenCss.textInput}
                            placeholder='Поштова скринька'
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            value={data.email}
                        />
                        {data.check_textInputChange ?
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
                            name="password"
                            style={loginScreenCss.textInput}
                            placeholder='Пароль'
                            autoCapitalize="none"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            onChangeText={(val) => handlePasswordChange(val)}
                            value={data.password}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
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
                        onPress={signIn}
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

