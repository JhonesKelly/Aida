// src/screens/Details.js
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {SYMBOL} from "../src/images";

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.RectangleShapeView} />
                <Text style={styles.textEnter}> Смотри историю своих выступлений и наблюдай за своим ростом в произношении чаще, это даст тебе мотивацию идти дальше) </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#4c899a', bottom: 142.5,}} />
            </View>
            <Image source={SYMBOL} style={styles.picture} />
            <TouchableOpacity
                style={styles.parametrics}
                onPress={() => navigation.navigate('Record')}
            >
                <Text style={styles.buttonText}>Параметры</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.howUse}
                onPress={() => navigation.navigate('Record')}
            >
                <Text style={styles.buttonText2}>Как использовать?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.history}
                onPress={() => navigation.navigate('Record')}
            >
                <Text style={styles.buttonText3}>История</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.whatIsItAida}
                onPress={() => navigation.navigate('Record')}
            >
                <Text style={styles.buttonText4}>Что такое AIDA?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.support}
                onPress={() => navigation.navigate('Record')}
            >
                <Text style={styles.buttonText}>Поддержка</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.end}
                onPress={() => navigation.navigate('Record')}
            >
                <Text style={styles.buttonText5}>Выход</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    end: {
        margin: 0,
        bottom: -40 ,
        left: 0,
        width: 200,
        height: 60,
        //justifyContent: 'center',
        //padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    support: {
        margin: 0,
        bottom: 60 ,
        left: 0,
        width: 300,
        height: 60,
        //justifyContent: 'center',
        //padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    parametrics: {
        margin: 0,
        bottom: 140 ,
        left: 0,
        width: 300,
        height: 60,
        //justifyContent: 'center',
        //padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    howUse: {
        margin: 0,
        bottom: 120 ,
        left: 0,
        width: 300,
        height: 60,
        //justifyContent: 'center',
        //padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    history: {
        margin: 0,
        bottom: 100 ,
        left: 0,
        width: 300,
        height: 60,
        //justifyContent: 'center',
        //padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    whatIsItAida: {
        margin: 0,
        bottom: 80 ,
        left: 0,
        width: 300,
        height: 60,
        //justifyContent: 'center',
        //padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4c899a',
        fontSize: 24,
        width: 140,
    },
    buttonText2: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4c899a',
        fontSize: 24,
        width: 220,
    },
    buttonText3: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4c899a',
        fontSize: 24,
        width: 100,
    },
    buttonText4: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4c899a',
        fontSize: 24,
        width: 185,
    },
    buttonText5: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4c899a',
        fontSize: 24,
        width: 75,
    },
    picture: {
        margin: 0,
        bottom: 270,
        width: 40,
        height: 40,
        zIndex: 100,
        borderRadius: 50,
        right: 180,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text: {
        color: '#333',
        fontSize: 24,
        fontWeight: 'bold'
    },
    RectangleShapeView: {
        margin: 0,
        flexDirection: 'column',
        bottom: 77.5,
        width: 330,
        height: 100,
        backgroundColor: 'grey',
        borderRadius: 20,
        right: 20,
    },
    textEnter: {
        width: 300,
        margin: 0,
        bottom: 167.5,
        fontSize: 16,
        color: "white",
        textAlign: "justify",
        right: 5,
    },
});