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
    var openWorksAfterSearchData=[];
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
      setIsLoading(false);
      console.log(data);
    });
  }

    const takeOnTheJob = (i) =>{
      var paramsTakeOnTheJob=[];  
      if(search != null && openWorksAfterSearchData != null){
        paramsTakeOnTheJob.push(openWorksData[i].ARBPLWERK)
        paramsTakeOnTheJob.push("")
        paramsTakeOnTheJob.push(openWorksData[i].EQUNR)
        paramsTakeOnTheJob.push(openWorksData[i].EQKTX)
        paramsTakeOnTheJob.push(openWorksData[i].TPLNR)
        paramsTakeOnTheJob.push(openWorksData[i].PLTXT)
        paramsTakeOnTheJob.push(openWorksData[i].AUFNR)
        paramsTakeOnTheJob.push(openWorksData[i].QMNUM)
        paramsTakeOnTheJob.push(openWorksData[i].QMNAM)
        paramsTakeOnTheJob.push(openWorksData[i].QMART)
        paramsTakeOnTheJob.push(openWorksData[i].MZEIT.substring(0,2)+":"+openWorksData[i].MZEIT.substring(2,4)+":"+openWorksData[i].MZEIT.substring(4,6))
        paramsTakeOnTheJob.push(openWorksData[i].QMDAT.substring(0,4)+"-"+openWorksData[i].QMDAT.substring(4,6)+"-"+openWorksData[i].QMDAT.substring(6,8))
      }
      if(search==null){
        paramsTakeOnTheJob.push(openWorksData[i].ARBPLWERK)
        paramsTakeOnTheJob.push("")
        paramsTakeOnTheJob.push(openWorksData[i].EQUNR)
        paramsTakeOnTheJob.push(openWorksData[i].EQKTX)
        paramsTakeOnTheJob.push(openWorksData[i].TPLNR)
        paramsTakeOnTheJob.push(openWorksData[i].PLTXT)
        paramsTakeOnTheJob.push(openWorksData[i].AUFNR)
        paramsTakeOnTheJob.push(openWorksData[i].QMNUM)
        paramsTakeOnTheJob.push(openWorksData[i].QMNAM)
        paramsTakeOnTheJob.push(openWorksData[i].QMART)
        paramsTakeOnTheJob.push(openWorksData[i].MZEIT.substring(0,2)+":"+openWorksData[i].MZEIT.substring(2,4)+":"+openWorksData[i].MZEIT.substring(4,6))
        paramsTakeOnTheJob.push(openWorksData[i].QMDAT.substring(0,4)+"-"+openWorksData[i].QMDAT.substring(4,6)+"-"+openWorksData[i].QMDAT.substring(6,8))
      }
      //paramsTakeOnTheJob=[ArizaBaslangic,ArizaKodu....]
      Alert.alert(
        "Emin Misiniz",
        paramsTakeOnTheJob[7]+" Numaralı işi üzerinize alıyosunuz!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => callWS("http","172.20.10.174","50000","MOBILE_PM/UI/NotificationList/OpenWorks/insNotifTableXqry" ,loginID,password,paramsTakeOnTheJob)
                                                .then((data)=>{
                                                          setOpenWorksData(data); 
                                                          setIsLoading(false);
                                                          console.log(data);
                                                    }) 
          }
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
        openWorksAfterSearchData.push(
          FilterResult[i]
        );
      }
    }else{
      FilterResult=[];
      FilterResult=openWorksData.filter(x => String(x.QMNUM).includes(search));
      for (let i = 0; i < openWorksData.filter(x => String(x.QMNUM).includes(search)).length; i++){
        openWorksAfterSearchData.push(
          FilterResult[i]
        );
      }
    }
    if(search==null && openWorksData!=null){
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
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksData[i].QMDAT.substring(0,4)+"-"+openWorksData[i].QMDAT.substring(4,6)+"-"+openWorksData[i].QMDAT.substring(6,8) +" "+openWorksData[i].MZEIT.substring(0,2)+":"+openWorksData[i].MZEIT.substring(2,4)+":"+openWorksData[i].MZEIT.substring(4,6)}</Text>
                </View>
              </View>        
            </TouchableOpacity>
          </View>
        );
      }
    }
    if(search != null && openWorksAfterSearchData != null){
      for (let i = 0; i < openWorksAfterSearchData.length; i++){
        viewData.push(
          <View key={i} style={styles.container} >
            <TouchableOpacity 
              style={{
                  height:130,
                  width:"95%",
                  flexDirection:"row",  
                  backgroundColor: openWorksAfterSearchData[i].QNUM %1 ==0 ? "#FA7E5E" : "#FA7E5E",
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
                  {openWorksAfterSearchData[i].QMNUM}
                </Text>
                  <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>Bildiren:</Text>
                  <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{openWorksAfterSearchData[i].QMNAM}</Text>
              </View>
              <View style={styles.ViewStyle2}>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksAfterSearchData[i].PLTXT}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksAfterSearchData[i].QMCOD} </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksAfterSearchData[i].EQTXT} </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksAfterSearchData[i].QMTXT}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12, fontWeight:"bold"}}>Bildirim Tarihi: </Text>
                  <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{openWorksAfterSearchData[i].QMDAT.substring(0,4)+"-"+openWorksAfterSearchData[i].QMDAT.substring(4,6)+"-"+openWorksAfterSearchData[i].QMDAT.substring(6,8) +" "+openWorksAfterSearchData[i].MZEIT.substring(0,2)+":"+openWorksAfterSearchData[i].MZEIT.substring(2,4)+":"+openWorksAfterSearchData[i].MZEIT.substring(4,6)}</Text>
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
          placeholder="Type Here" 
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