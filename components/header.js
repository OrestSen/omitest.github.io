import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Header({ children, props }) {

    return (
        <View style={styles.container}>
            <Text {...props} style={styles.title}>
                {children}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginVertical: '15%',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#455a64',
        fontSize: 35,
        fontWeight: 'bold',
    },
});