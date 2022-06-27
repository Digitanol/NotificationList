
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../src/component/LoginScreen';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login' >
            <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen}/>
            <Stack.Screen name="tabs" options={{headerShown:false}} component={Tabs}/>
        </Stack.Navigator>
    );
}
export default AppNavigator;