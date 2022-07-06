import { Text, View } from 'react-native';
import React, { useState } from 'react';
import NumericInput from 'react-native-numeric-input';

const MaterialConsumption = (props) =>{
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const SAPKullanici=props.route.params.SAPKullanici;
    const BildirimNo=props.route.params.bildirimNo;
    const [state,setState]=useState("");
    const [value,setValue]=useState("");
    return(
        <View>
            <Text>Material Consumption Test Login ID:{loginID}, Password:{password}, SAPKullanici: {SAPKullanici}, BildirimNo: {BildirimNo}</Text>
            <View>
                <NumericInput 
                    value={value} 
                    onChange={value => setState({value})} 
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={250} 
                    totalHeight={20} 
                    iconSize={25}
                    step={1}
                    minValue={0}
                    valueType="integer"
                    rounded 
                    textColor='#B0228C' 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='#EA3788' 
                    leftButtonBackgroundColor='#E56B70' />

            </View>
            
        </View>
    );
}
export default MaterialConsumption