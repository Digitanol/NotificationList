import React from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity,Dimensions} from "react-native";
import {OpenWorksDummyData} from "../../data/data";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OpenWorks =(props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    var dummydata=[];
    for (let i = 0; i < OpenWorksDummyData.length; i++){
        dummydata.push(
          <View key={i} style={styles.container} >
          <TouchableOpacity 
            style={{
                height:110,
                width:"95%",
                flexDirection:"row",  
                backgroundColor: OpenWorksDummyData[i].BildirimNo %2 ==0 ? "#3cb371" : "#f44336",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}} 
                onPress={()=>navigation.navigate("tabs", {EkipmanTanimi: OpenWorksDummyData[i].EkipmanTanimi})} >
            <View style={styles.ViewStyle1} >
              <Text style={{fontWeight:"bold", fontSize:20, color:"white"}}>
              {OpenWorksDummyData[i].EkipmanTanimi}
              </Text>
            </View>
            <View style={styles.ViewStyle2}>
              <Text style={{fontSize:12, fontWeight:"bold"}}>{OpenWorksDummyData[i].TeknikBirimTanimi}</Text>
              <Text style={{fontSize:12, fontWeight:"200"}}>{OpenWorksDummyData[i].ArizaKodu} </Text>
              <Text style={{fontSize:12, fontWeight:"200"}}>{OpenWorksDummyData[i].BildirimNo} </Text>
            </View>
            <View style={styles.ViewStyle1}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"200"}}>{OpenWorksDummyData[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"200"}}>{OpenWorksDummyData[i].Bildiren}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"200"}}>{OpenWorksDummyData[i].ArizaBaslangic}</Text>
              </View>
            </View>         
          </TouchableOpacity>
          </View>
        );
      }
    return(
        <View>
            <Text>{dummydata}</Text>
        </View>
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
      paddingTop:10,
      width: "40%",
      height:"100%",
      flexDirection:"column",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    image: {
    
    },
});