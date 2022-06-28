import React from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity, AppState} from "react-native";

const AppointedWorks =(props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    return(
        <View>
            <Text>AppointedWorks {loginID}</Text>
        </View>
    );
}
export default AppointedWorks;