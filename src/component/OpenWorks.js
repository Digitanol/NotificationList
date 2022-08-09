import React, {useState, useEffect} from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity, Dimensions, ActivityIndicator} from "react-native";
import {OpenWorksDummyData} from "../../data/data";
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import callWS from "../controller/callWS";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OpenWorks = (props) => {
 
    var viewData=[];
    var OpenWorksDummyData2=[];
    var OpenWorksDummyData1=OpenWorksDummyData;
    var FilterResult;
    var params = [];
    const [isLoading,setIsLoading]=useState(true);
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const [search,setSearch]=useState("");
    const [searchUpper,setSearchUpper]=useState("");
    const [trnsPath, setTrnsPath]=useState("MOBILE_PM/UI/NotificationList/OpenWorks/getOpenWorksListXqry");
    const [openWorksData,setOpenWorksData]=useState([]);

  if(isLoading){
    callWS("http","172.20.10.174","50000",trnsPath ,loginID,password,params)
    .then((data)=>{
      setOpenWorksData(data);
      console.log(data);
      setIsLoading(false);
    });
  }
   
  
  
 
    const takeOnTheJob = (i) =>{
      var paramsTakeOnTheJob=[];  
      if(search != null && OpenWorksDummyData2 != null){
        paramsTakeOnTheJob.push(openWorksData[i].QMDAT+" "+openWorksData[i].MZEIT)
        paramsTakeOnTheJob.push(openWorksData[i].QMCOD)
        paramsTakeOnTheJob.push(openWorksData[i].QMTXT)
        paramsTakeOnTheJob.push(openWorksData[i].QMNAM)
        paramsTakeOnTheJob.push(openWorksData[i].QMNUM)
        paramsTakeOnTheJob.push(openWorksData[i].EQTXT)
        paramsTakeOnTheJob.push(openWorksData[i].PLTXT)
      }
      if(search==null){
        paramsTakeOnTheJob.push(openWorksData[i].QMDAT+" "+openWorksData[i].MZEIT)
        paramsTakeOnTheJob.push(openWorksData[i].QMCOD)
        paramsTakeOnTheJob.push(openWorksData[i].QMTXT)
        paramsTakeOnTheJob.push(openWorksData[i].QMNAM)
        paramsTakeOnTheJob.push(openWorksData[i].QMNUM)
        paramsTakeOnTheJob.push(openWorksData[i].EQTXT)
        paramsTakeOnTheJob.push(openWorksData[i].PLTXT)
      }
      //paramsTakeOnTheJob=[ArizaBaslangic,ArizaKodu....]
      Alert.alert(
        "Emin Misiniz",
        paramsTakeOnTheJob[4]+" Numaralı işi üzerinize alıyosunuz!",
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
    const onSearch = (search) =>{
      setSearchUpper(search.toUpperCase());
      setSearch(search);
    
    }
    if(openWorksData.filter(x=>String(x.QMNAM).includes(searchUpper))[0]){
      FilterResult=[];
      FilterResult=openWorksData.filter(x=>String(x.QMNAM).includes(searchUpper));
      for (let i = 0; i < openWorksData.filter(x => String(x.QMNAM).includes(searchUpper)).length; i++){
        OpenWorksDummyData2.push(
          FilterResult[i]
        );
      }
    }else{
      FilterResult=[];
      FilterResult=openWorksData.filter(x => String(x.QMNUM).includes(search));
      for (let i = 0; i < openWorksData.filter(x => String(x.QMNUM).includes(search)).length; i++){
        OpenWorksDummyData2.push(
          FilterResult[i]
        );
      }
    }
    if(search==null){
      for (let i = 0; i < openWorksData.length; i++){
        viewData.push(
          <View key={i} style={styles.container} >
            <TouchableOpacity 
              style={{
                  height:130,
                  width:"95%",
                  flexDirection:"row",  
                  backgroundColor: openWorksData[i].QMNUM %1 ==0 ? "#FA7E5E" : "#FA7E5E",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderBottomRightRadius:10,
                  borderBottomLeftRadius:10,}} 
                  onPress={()=>takeOnTheJob(i)} >
              <View style={styles.ViewStyle1} >
                <Text style={{fontWeight:"bold", fontSize:13, color:"black"}}>
                  BildirimNo:
                </Text>
                <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>
                  {openWorksData[i].QMNUM}
                </Text>
                  <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>Bildiren:</Text>
                  <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{openWorksData[i].QMNAM}</Text>
              </View>
              <View style={styles.ViewStyle2}>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksData[i].PLTXT}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksData[i].QMCOD} </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksData[i].EQTXT} </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksData[i].QMTXT}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Bildirim Tarihi: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksData[i].QMDAT+" "+openWorksData[i].MZEIT}</Text>
                </View>
              </View>        
            </TouchableOpacity>
          </View>
        );
      }
    }
    if(search != null && OpenWorksDummyData2 != null){
      for (let i = 0; i < OpenWorksDummyData2.length; i++){
        viewData.push(
          <View key={i} style={styles.container} >
            <TouchableOpacity 
              style={{
                  height:130,
                  width:"95%",
                  flexDirection:"row",  
                  backgroundColor: OpenWorksDummyData2[i].BildirimNo %1 ==0 ? "#FA7E5E" : "#FA7E5E",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderBottomRightRadius:10,
                  borderBottomLeftRadius:10,}} 
                  onPress={()=>takeOnTheJob(i)} >
              <View style={styles.ViewStyle1} >
                <Text style={{fontWeight:"bold", fontSize:13, color:"black"}}>
                  BildirimNo:
                </Text>
                <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>
                  {OpenWorksDummyData2[i].BildirimNo}
                </Text>
                  <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>Bildiren:</Text>
                  <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{OpenWorksDummyData2[i].Bildiren}</Text>
              </View>
              <View style={styles.ViewStyle2}>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData2[i].TeknikBirimTanimi}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData2[i].ArizaKodu} </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData2[i].EkipmanTanimi} </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData2[i].ArizaKoduKisaAciklama}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Bildirim Tarihi: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{OpenWorksDummyData2[i].ArizaBaslangic}</Text>
                </View>
              </View>        
            </TouchableOpacity>
          </View>
        );
      }
    }
    return(
      <View>
        <SearchBar
          style={{color:"black"}}
          containerStyle={{height:height/14,paddingTop:5,backgroundColor:"white"}}
          platform="android"
          placeholder="Type Here..."
          onChangeText={(search) =>onSearch(search)}
          value={search}
        />
        <ScrollView style={styles.scrollViewStyle}>
          { 
            isLoading ? 
            <ActivityIndicator 
              style={{ height: 80,justifyContent:"center", alignItems:"center" }} 
              color="#e33939"
              size="large"/> : <Text>{viewData}</Text>
          }
        </ScrollView>
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
      paddingTop:5,
      width:width,
      height:height/1.26,
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