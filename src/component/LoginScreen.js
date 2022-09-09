
import React,{ useEffect, useState, useRef } from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity, AppState} from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen=({navigation}) => {
    const [loginID, setloginID] = useState("XMBOZKIR");
    const [password, setPassword] = useState("DigitANOL2019*");
   
    AsyncStorage.multiSet([
      ["loginID", loginID], ["password", password]
    ])
    const loginButton = () => {
      
      navigation.navigate("tabs", {loginID:loginID,password:password});
    }
    
    
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={require("../../assets/LOGO.png")} />
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput }
              placeholder="ID"
              placeholderTextColor="#003f5c"
              value={loginID}
              onChangeText={(loginID) => setloginID(loginID)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder='Password'
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn } onPress={loginButton}  >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
        marginBottom: 40,
      },
      inputView: {
        backgroundColor: "#f0f0f0",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        alignItems: 'center',
        justifyContent:'center',
        textAlign:'center',
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        width:"100%"
      },
      forgot_button: {
        height: 30,
        marginBottom: 40,
      },
      loginBtn: {
        width: "80%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#b7d7e8",
      },
    });


export default LoginScreen;