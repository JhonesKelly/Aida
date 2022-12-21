import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainStackNavigator from './navigation/MainStackNavigator';
import Login from "./screens/Login";
import Registration from "./screens/Registration";
export default function App() {
    return <MainStackNavigator />;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    }
});




// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { Audio } from 'expo-av';
// import * as Sharing from 'expo-sharing';
//
// export default function App() {
//     const [recording, setRecording] = React.useState();
//     const [recordings, setRecordings] = React.useState([]);
//     const [message, setMessage] = React.useState("");
//
//     async function startRecording() {
//         try {
//             const permission = await Audio.requestPermissionsAsync();
//
//             if (permission.status === "granted") {
//                 await Audio.setAudioModeAsync({
//                     allowsRecordingIOS: true,
//                     playsInSilentModeIOS: true
//                 });
//
//                 const { recording } = await Audio.Recording.createAsync(
//                     Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
//                 );
//
//                 setRecording(recording);
//             } else {
//                 setMessage("Please grant permission to app to access microphone");
//             }
//         } catch (err) {
//             console.error('Failed to start recording', err);
//         }
//     }
//
//     async function stopRecording() {
//         setRecording(undefined);
//         await recording.stopAndUnloadAsync();
//
//         let updatedRecordings = [...recordings];
//         const { sound, status } = await recording.createNewLoadedSoundAsync();
//         updatedRecordings.push({
//             sound: sound,
//             duration: getDurationFormatted(status.durationMillis),
//             file: recording.getURI()
//         });
//
//         setRecordings(updatedRecordings);
//     }
//
//     function getDurationFormatted(millis) {
//         const minutes = millis / 1000 / 60;
//         const minutesDisplay = Math.floor(minutes);
//         const seconds = Math.round((minutes - minutesDisplay) * 60);
//         const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
//         return `${minutesDisplay}:${secondsDisplay}`;
//     }
//
//     function getRecordingLines() {
//         return recordings.map((recordingLine, index) => {
//             return (
//                 <View key={index} style={styles.row}>
//                     <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
//                     <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
//                     <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
//                 </View>
//             );
//         });
//     }
//     return (
//         <View style={styles.container}>
//             <Text>{message}</Text>
//             <Button
//                 title={"жмай"}
//                 onPress={startRecording} />
//
//             <StatusBar style="auto" />
//         </View>
//     );
// }
// // title={recording ? 'Stop Recording' : 'Start Recording'}
// // {getRecordingLines()}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     row: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     fill: {
//         flex: 1,
//         margin: 16
//     },
//     button: {
//         margin: 16
//     }
// });







// import React from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     Button,
//     AppRegistry,
// } from 'react-native';
// import Voice from 'react-native-voice';
// import {Component} from "react";
// export default class VoiceNative extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             recognized: '',
//             started: '',
//             results: [],
//         };
//         Voice.onSpeechStart = this.onSpeechStart.bind(this);
//         Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
//         Voice.onSpeechResults = this.onSpeechResults.bind(this);
//     }
//     componentWillUnmount() {
//         Voice.destroy().then(Voice.removeAllListeners);
//     }
//     onSpeechStart(e) {
//         this.setState({
//             started: '√',
//         });
//     };
//     onSpeechRecognized(e) {
//         this.setState({
//             recognized: '√',
//         });
//     };
//     onSpeechResults(e) {
//         this.setState({
//             results: e.value,
//         });
//     }
//     async _startRecognition(e) {
//         this.setState({
//             recognized: '',
//             started: '',
//             results: [],
//         });
//         try {
//             await Voice.start('en-US');
//         } catch (e) {
//             console.error(e);
//         }
//     }
//     render () {
//         return (
//             <View>
//                 <Text style={styles.transcript}>
//                     Transcript
//                 </Text>
//                 {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
//                 )}
//                 <Button style={styles.transcript}
//                         onPress={this._startRecognition.bind(this)}
//                         title="Start"></Button>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     transcript: {
//         textAlign: 'center',
//         color: '#B0171F',
//         marginBottom: 1,
//         top: '400%',
//     },
// });
// AppRegistry.registerComponent('VoiceNative', () => VoiceNative);