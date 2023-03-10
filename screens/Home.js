import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import {SYMBOL} from "../src/images";
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';

export function Home({ navigation }) {
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');

        // fetch('http://127.0.0.1:8000/sasha_pisdor/.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         return responseJson.movies;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

    };
    async function startRecording() {
        try {
            const permission = await Audio.requestPermissionsAsync();

            if (permission.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                });

                const { recording } = await Audio.Recording.createAsync(
                    Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
                );

                setRecording(recording);
            } else {
                setMessage("Please grant permission to app to access microphone");
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();

        let updatedRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        });

        setRecordings(updatedRecordings);
    }

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

    function getRecordingLines() {
        return recordings.map((recordingLine, index) => {
            return recordingLine.sound.replayAsync()
        })}

    return (
        <View style={styles.screen}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Menu')}
            >
                <Text style={styles.buttonText}>RESULT</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer2}
                onPress={() => navigation.navigate('Menu')}

            >
                <Text style={styles.buttonText2}>MENU</Text>
            </TouchableOpacity>
            <Image source={SYMBOL} style={styles.picture} />
            <View>
                <View style={styles.RectangleShapeView} />
                <Text style={styles.textEnter}> ?????????? ???? ???????????? ?? ???????????????? ???????????????????? ???????? ????????, ?? ?????????? ?? ?????? ???????? ?????????????????????????? ?? ?????????????? ?????????????? ???? ?? ?????????????????? ??????????????????????)  </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#4c899a', top: 105,}} />
            </View>

            <TouchableHighlight onPress={() => buttonClickedHandler()} style={styles.parametricButton4}>
                <Image style={styles.ImageStyle} source={require('./logo_ru_4.png')} />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => getRecordingLines()} style={styles.parametricButton2}>
                <Image style={styles.ImageStyle} source={require('./logo_ru_5.png')} />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => buttonClickedHandler()} style={styles.parametricButton3}>
                <Image style={styles.ImageStyle2} source={require('./logo_ru_6.png')} />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => stopRecording()} style={styles.parametricButton1}>
                <Image style={styles.ImageStyle2} source={require('./logo_ru_7.png')} />
            </TouchableHighlight>

            <TouchableOpacity
                onPress={startRecording}
                style={styles.recButton}>

                <Text style={{width: 200, textAlign: 'center', fontSize: 22,  }}>?????? ???????? ??????????!</Text>
            </TouchableOpacity>


            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#4c899a', top: 315,}} />
            </View>
            <View style={styles.RectangleShapeView2} />
            <Text style={styles.textEnter2}>?????? ?????????? ???? ????????????????????!</Text>
            <Image source={SYMBOL} style={styles.picture2} />
            <View style={styles.RectangleShapeView3} />
            <Text style={styles.textEnter3}>???????????????????? ???? ?????????????????????? ???? ??????????????
                ?????????????? ?? ?????????????????????????????? ????
                ????????????????????????)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ImageStyle:{
        width: 70,
        height: 70,
        borderRadius: 40,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    ImageStyle2:{
        width: 70,
        height: 70,
        borderRadius: 40,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    picture: {
        margin: 0,
        top: 50,
        width: 40,
        height: 40,
        zIndex: 100,
        borderRadius: 50,
        right: 180,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    picture2: {
        margin: -20,
        top: 310,
        width: 40,
        height: 40,
        zIndex: 100,
        borderRadius: 50,
        right: 180,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    },
    textEnter: {
        width: 300,
        margin: -40,
        top: 40,
        fontSize: 16,
        color: "white",
        textAlign: "justify",
        right: 5,
    },
    textEnter2: {
        width: 300,
        margin: 0,
        top: 340,
        fontSize: 16,
        color: "white",
        textAlign: "justify",
        right: 5,
    },
    textEnter3: {
        width: 300,
        margin: -30,
        top: 425,
        fontSize: 16,
        color: "white",
        textAlign: "justify",
        right: 25,
    },
    screen: {
        margin: -515,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: 1300,

    },
    recButton: {
        marginTop: -160,
        top: 230,
        width: 255,
        height: 255,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 150,
        backgroundColor: '#ccc',
    },
    parametricButton1: {
        marginTop: -100,
        top: 335,
        left: 150,
        width: 70,
        height: 70,
        //justifyContent: 'center',
        //padding: 10,
        borderRadius: 150,
        backgroundColor: '#ccc',
        flexDirection: 'row',

    },
    parametricButton2: {
        marginTop: -50,
        top: 370,
        right: 150,
        width: 70,
        height: 70,
        //justifyContent: 'center',
        //padding: 10,
        borderRadius: 150,
        backgroundColor: '#ccc',
        flexDirection: 'row',
    },
    parametricButton3: {
        top: 100,
        left: 150,
        width: 70,
        height: 70,
        //justifyContent: 'center',
        //padding: 10,
        borderRadius: 150,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    parametricButton4: {
        top: 185,
        right: 150,
        width: 70,
        height: 70,
        //justifyContent: 'center',
        //padding: 10,
        borderRadius: 150,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    RectangleShapeView: {
        margin: -35,
        flexDirection: 'column',
        top: 55,
        width: 330,
        height: 100,
        backgroundColor: 'grey',
        borderRadius: 20,
        right: 20,
    },
    RectangleShapeView2: {
        margin: -20,
        flexDirection: 'column',
        top: 355,
        width: 280,
        height: 50,
        backgroundColor: 'grey',
        borderRadius: 20,
        right: 45,
    },
    RectangleShapeView3: {
        margin: -50,
        flexDirection: 'column',
        top: 415,
        width: 335,
        height: 80,
        backgroundColor: 'grey',
        borderRadius: 20,
        right: 20,
    },
    buttonContainer: {
        margin: -95,
        top: 680 ,
        left: 190,
        width: 60,
        height: 145,
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
        transform: [{ rotate: '270deg'}],
        fontSize: 20,
        width: 70,
        right: 5,
    },
    buttonText2: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4c899a',
        transform: [{ rotate: '270deg'}],
        fontSize: 20,
        width: 70,
        right: 5,
        bottom:5,
    },
    buttonContainer2: {
        margin: -50,
        top: 110 ,
        left: 190,
        width: 55,
        height: 100,
        //justifyContent: 'center',
        //padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#4c899a",
    }
});

export default Home;