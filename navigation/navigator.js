
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../src/component/LoginScreen';
import Tabs from './tabs';
import StartedWorks from "../src/component/StartedWorks";
import MaterialConsumption from "../src/component/MaterialConsumption";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login' >
            <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen}/>
            <Stack.Screen name="tabs" options={{headerShown:false}} component={Tabs}/>
            <Stack.Screen name="StartedWorks" options={{headerShown:false}} component={StartedWorks}/>
            <Stack.Screen name="MaterialConsumption" options={{headerShown:true}} component={MaterialConsumption}/>
        </Stack.Navigator>
    );
}
export default AppNavigator;