import React from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity,Dimensions} from "react-native";
import {OpenWorksDummyData} from "../../data/data";
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OpenWorks =(props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const takeOnTheJob = (param1,param2) =>{
      Alert.alert(
        "Emin Misiniz",
        param1+" Numaralı işi üzerinize alıyosunuz!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    };
    var dummydata=[];
    for (let i = 0; i < OpenWorksDummyData.length; i++){
        dummydata.push(
          <View key={i} style={styles.container} >
          <TouchableOpacity 
            style={{
                height:130,
                width:"95%",
                flexDirection:"row",  
                backgroundColor: OpenWorksDummyData[i].BildirimNo %1 ==0 ? "#FA7E5E" : "#FA7E5E",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}} 
                onPress={()=>takeOnTheJob(OpenWorksDummyData[i].BildirimNo, OpenWorksDummyData[i].Bildiren)} >
            <View style={styles.ViewStyle1} >
              <Text style={{fontWeight:"bold", fontSize:13, color:"black"}}>
                BildirimNo:
              </Text>
              <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>
                {OpenWorksDummyData[i].BildirimNo}
              </Text>
                <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>Bildiren:</Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{OpenWorksDummyData[i].Bildiren}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData[i].TeknikBirimTanimi}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData[i].ArizaKodu} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData[i].EkipmanTanimi} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Bildirim Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData[i].ArizaBaslangic}</Text>
              </View>
            </View>        
          </TouchableOpacity>
          </View>
        );
      }
    return(
        <ScrollView>
            <Text>{dummydata}</Text>
        </ScrollView>
    );
}
export default OpenWorks;
const styles = StyleSheet.create({
    container: {
      width:width,
      flex: 1,
      alignItems: "stretch", 
      justifyContent: "space-evenly",
      paddingBottom:10,
      flexDirection: "row"
    },
    scrollViewStyle: {     
      paddingTop:40,
      width:width,
      height:height,
      flexDirection:"column",
    },
    ViewStyle1: {
      width: "30%",
      height:"100%",
      flexDirection:"column",
      alignItems: "center",
      justifyContent: "center",
    },
    ViewStyle2: {
      width: "40%",
      height:"100%",
      flexDirection:"column",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    image: {
    
    },
});