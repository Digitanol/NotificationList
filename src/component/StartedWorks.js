import React from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity, Dimensions} from "react-native";
import {StartedWorksDummyData} from "../../data/data";
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const StartedWorks =(props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;

    var dummydata=[];
    for (let i = 0; i < StartedWorksDummyData.length; i++){
        dummydata.push(
          <View key={i} style={styles.container} >
          <TouchableOpacity 
            style={{
                height:130,
                width:"95%",
                flexDirection:"row",  
                backgroundColor: loginID==StartedWorksDummyData[i].SAPKullanici ? "#71aac8": "#71aac8",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}} 
                onPress={()=>startTheWork(StartedWorksDummyData[i].SAPKullanici,StartedWorksDummyData[i].BildirimNo)} >
            <View style={styles.ViewStyle1} >
              <Text style={{fontWeight:"bold", fontSize:13, color:"black"}}>BildirimNo:</Text>
              <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>{StartedWorksDummyData[i].BildirimNo}</Text>
              <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>SAP Kullanıcı:</Text>
              <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{StartedWorksDummyData[i].SAPKullanici}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData[i].TeknikBirimTanimi}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData[i].ArizaKodu} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData[i].EkipmanTanimi} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Bildirim Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData[i].ArizaBaslangic}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>Bildiren: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{StartedWorksDummyData[i].Bildiren}</Text>
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
export default StartedWorks;
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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor:"transparent"
    },
    modalView: {
      margin: 10,
      backgroundColor: "#a0c7da",
      borderRadius: 20,
      justifyContent:"center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height:height/3,
      width:width/2,
    },
    button: {
      borderRadius: 20,
      padding:10,
      elevation: 2,
      width:width/4,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    },
    buttonOpen: {
      backgroundColor: "#418eb5",
    },
    buttonClose: {
      backgroundColor: "#1272a3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"

    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight:"bold",
      color:"white"
    },
    cancel: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:width/4,
      backgroundColor:"white",
    }
});