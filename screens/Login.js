import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  TextInput,
} from "react-native";
import { LOGO } from "../src/images";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        return (
            <><><><View >
                <Image source={LOGO}
                    style={styles.picture} />
                <Text style={styles.textEnter}> ВХОД </Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Логин'
                    placeholderTextColor='#B6B9BD'
                    onChangeText={(email) => setEmail(email)} />
            </View></>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Пароль'
                    placeholderTextColor='#B6B9BD'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)} />
            </View></>
        
            <TouchableOpacity>
            <Text style={styles.forgot_button}>Забыли пароль?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} >
            <Text style={styles.loginText}>Войти</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reg_button} onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.regText}>Зарегистрироваться</Text>
            </TouchableOpacity></>
    );
};
 
const styles = StyleSheet.create ({
    textEnter: {
      color: 'white',
      fontSize: 36,
      marginBottom: 30,
      marginLeft: '20%',
      
    },

    picture: {
      width: 270,
      height: 110,
      marginBottom: 30,
    },
    
    inputView: {
      backgroundColor: "#7B838F",
      borderRadius: 30,
      width: "70%",
      height: 60,
      marginBottom: 20,
      alignItems: "center",
    },
  
    TextInput: {
      height: 60,
      flex: 1,
      padding: 10,
      fontSize: 20
    },

    forgot_button: {
      height: 30,
      marginTop: 20,
      marginBottom: 30,
      color: 'white',
      fontSize: 22
    },

    loginBtn: {
      width:"75%",
      borderRadius:30,
      height:60,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor: '#4c899a',
    },

    loginText: {
      fontSize: 20,
      color:'white',
    },

    reg_button: {
      height: 30,
      marginTop: 30,
    },
    
    regText: {
      color: '#90d4e9',
      fontSize: 22,
    },
  });
