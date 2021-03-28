import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { textMainCss } from '../styles/textMainCss'

export default function TextMain({ children, props }) {

    return (
        <View style={textMainCss.container}>
            <View style={textMainCss.line} />
            <View>
                <Text {...props} style={textMainCss.text}>{children}</Text>
            </View>
            <View style={textMainCss.line} />
        </View>
    );
}
