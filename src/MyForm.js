import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

const MyForm = () => {
    const [user, setUserdata] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
            <>
                <Text>MD Shahin Mia Robin</Text> 
            </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth : 1.0
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#000",
    },
    loginText: {
        color: '#fff'
    }
});

export default MyForm;