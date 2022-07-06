import { Text, View } from 'react-native';
import React, { Component } from 'react';

const MaterialConsumption = (props) =>{
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const SAPKullanici=props.route.params.SAPKullanici;
    const BildirimNo=props.route.params.bildirimNo;
    return(
        <View>
            <Text>Material Consumption Test Login ID:{loginID}, Password:{password}, SAPKullanici: {SAPKullanici}, BildirimNo: {BildirimNo}</Text>
        </View>
    );
}

export default MaterialConsumption