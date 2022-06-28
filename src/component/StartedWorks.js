import React from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity} from "react-native";

const StartedWorks =(props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    return(
        <View>
            <Text>StartedWorks {loginID}</Text>
        </View>
    );
}
export default StartedWorks;