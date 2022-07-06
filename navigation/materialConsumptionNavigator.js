
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartedWorks from "../src/component/StartedWorks";
import MaterialConsumption from "../src/component/MaterialConsumption";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='StartedWorks' >
            <Stack.Screen name="StartedWorks" options={{headerShown:false}} component={StartedWorks}/>
            <Stack.Screen name="MaterialConsumption" options={{headerShown:false}} component={MaterialConsumption}/>
        </Stack.Navigator>
    );
}
export default AppNavigator;