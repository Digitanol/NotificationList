import React, {useState} from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity, Dimensions} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import {CompletedWorksDummyData} from "../../data/data";
import { SearchBar } from "react-native-elements";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CompletedWorks =(props) => {
    var dummydata=[];
    var CompletedWorksDummyData2=[];
    var CompletedWorksDummyData1=CompletedWorksDummyData;
    var FilterResult;
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const [search,setSearch]=useState("");
    const [searchUpper,setSearchUpper]=useState("");

    const onSearch = (search) =>{
      setSearch(search);
      setSearchUpper(search.toUpperCase())
      //search field
    }

    if(CompletedWorksDummyData1.filter(x=>String(x.Bildiren).includes(searchUpper))[0]){
      FilterResult=[];
      FilterResult=CompletedWorksDummyData1.filter(x=>String(x.Bildiren).includes(searchUpper));
      for (let i = 0; i < CompletedWorksDummyData1.filter(x => String(x.Bildiren).includes(searchUpper)).length; i++){
        CompletedWorksDummyData2.push(
          FilterResult[i]
        );
      }
    }else{
      FilterResult=[];
      FilterResult=CompletedWorksDummyData1.filter(x => String(x.BildirimNo).includes(search));
      for (let i = 0; i < CompletedWorksDummyData1.filter(x => String(x.BildirimNo).includes(search)).length; i++){
        CompletedWorksDummyData2.push(
          FilterResult[i]
        );
      }
    }  

    if(search != "" && CompletedWorksDummyData2 != ""){
      dummydata=[];
      for (let i = 0; i < CompletedWorksDummyData2.length; i++){
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
              <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>{CompletedWorksDummyData2[i].BildirimNo}</Text>
              <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>Bildiren:</Text>
              <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData2[i].Bildiren}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData2[i].TeknikBirimTanimi}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData2[i].ArizaKodu} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData2[i].EkipmanTanimi} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData2[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Başlangıç Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData2[i].ArizaBaslangic}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>Arıza Bitiş Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData2[i].ArızaBitis}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>İşe Başlama Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData2[i].IseBaslangic}</Text>
              </View> 
            </View>        
          </TouchableOpacity>
          </View>
        );
      }
    }
    if(search == ""){
      dummydata=[];
      for (let i = 0; i < CompletedWorksDummyData1.length; i++){
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
              <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>{CompletedWorksDummyData1[i].BildirimNo}</Text>
              <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>Bildiren:</Text>
              <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData1[i].Bildiren}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData1[i].TeknikBirimTanimi}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData1[i].ArizaKodu} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData1[i].EkipmanTanimi} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData1[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Başlangıç Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{CompletedWorksDummyData1[i].ArizaBaslangic}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>Arıza Bitiş Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData1[i].ArızaBitis}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>İşe Başlama Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{CompletedWorksDummyData1[i].IseBaslangic}</Text>
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
          style={{color:"red"}}
          containerStyle={{height:height/14,paddingTop:5,backgroundColor:"white"}}
          platform="android"
          placeholder="Type Here..."
          onChangeText={(search) =>onSearch(search)}
          value={search}
        />
        <ScrollView style={styles.scrollViewStyle}>
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