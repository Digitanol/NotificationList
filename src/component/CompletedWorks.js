import React, {useState} from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity, Dimensions} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import {CompletedWorksDummyData} from "../../data/data";
import { SearchBar } from "react-native-elements";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CompletedWorks =(props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const [search,setSearch]=useState("");

    const onSearch = (search) =>{
      setSearch(search);
      //search field
    }
    var dummydata=[];
    for (let i = 0; i < CompletedWorksDummyData.length; i++){
        dummydata.push(
          <View key={i} style={styles.container} >
          <TouchableOpacity 
            style={{
                height:130,
                width:"95%",
                flexDirection:"row",  
                backgroundColor: "#37d079",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}} 
                onPress={()=>console.log()} >
            <View style={styles.ViewStyle1} >
              <Text style={{fontWeight:"bold", fontSize:13, color:"black"}}>BildirimNo:</Text>
              <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>{CompletedWorksDummyData[i].BildirimNo}</Text>
              <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>Bildiren:</Text>
              <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData[i].Bildiren}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData[i].TeknikBirimTanimi}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData[i].ArizaKodu} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData[i].EkipmanTanimi} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Başlangıç Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData[i].ArizaBaslangic}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>Arıza Bitiş Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData[i].ArızaBitis}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>İşe Başlama Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData[i].IseBaslangic}</Text>
              </View> 
            </View>        
          </TouchableOpacity>
          </View>
        );
      }
    return(
      <View>
        <SearchBar
          style={{color:"red"}}
          containerStyle={{}}
          platform="android"
          placeholder="Type Here..."
          onChangeText={(search) =>onSearch(search)}
          value={search}
        />
        <ScrollView>
          <Text>{dummydata}</Text>
        </ScrollView>
      </View>
        
    );
}
export default CompletedWorks;
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