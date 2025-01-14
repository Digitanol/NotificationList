import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity, Dimensions, Modal} from "react-native";
import { StartedWorksDummyData } from "../../data/data";
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SearchBar } from "react-native-elements";
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const StartedWorks =(props) => {
    const { navigation } = props;
    var dummydata=[];
    var StartedWorksDummyData2=[];
    var StartedWorksDummyData1=StartedWorksDummyData;
    var FilterResult;
    const breakReason = ["YENI", "MESAİ BİTİŞ", "MOLA", "MALZEME BEKLENİYOR", "PERSONEL BEKLENİYOR", "SERVİS BEKLENİYOR"];
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const [modalCall, setModalCall] = useState(false);
    const [modalSAPKullanici,setModalSAPKullanici]=useState("");
    const [modalBildirimNo,setModalBildirimNo]=useState("");
    const [search,setSearch]=useState("");
    const [searchUpper,setSearchUpper]=useState("");
    const [modalTakeABreak,setModalTakeABreak]=useState(false);
    const [takeABreakReason,setTakeABreakReason]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    /* callWS("http","172.20.10.174","50000","MOBILE_PM/GettingOperation/getNotificationList/getNotificationListXqry",loginID,password,params)
    .then(function(data){
      console.log(data);
      setIsLoading(false);
    }); */
    const onPressStartedWorks = (SAPKullanici,BildirimNo) =>{
        setModalSAPKullanici(SAPKullanici);
        setModalBildirimNo(BildirimNo);
        // Başlanan işlerden birisi seçildiğinde o dizine ait SAP Kullanicisi ve diğer gerekecek veriler burada "set"lenecek.
        if(SAPKullanici==loginID){
            setModalCall(true);
        }else{
            Alert.alert(
                "Emin Misiniz",
                "Kullanıcınız "+modalBildirimNo+" No'lu İşlemi yapmaya yetkili değil.",
                [
                    { text: "OK", onPress: () => console.log("") }
                ]
                );
        }
    }   
    const takeABreak = () => {
        setModalCall(!modalCall);
        setModalTakeABreak(!modalTakeABreak);
       //Ara ver Çalıştırılacak-SAP Kullanicisi, Bildirim No yukarıdaki modalSAPKUllanicisi ve ModalBildirim No dan çekilecek
    }
    const finishTheJob = () => {
    setModalCall(!modalCall);
    //işi bitir transaction çalıştırılacak-
    }
    const consumeMaterial = (modalBildirimNo,modalSAPKullanici,loginID,password) => {
    setModalCall(!modalCall);
    navigation.navigate("MaterialConsumption", {loginID:loginID,password:password,bildirimNo:modalBildirimNo,SAPKullanici:modalSAPKullanici});
    //Malzeme Tüket transaction çalıştırılacak
    }
    const completeTheJob = () => {
    setModalCall(!modalCall);
    //İşi Tamamla Transaction Çalıştırılacak
    }
    const cancelTheJob = () => {
        //Cancel Butonu
        Alert.alert(
            "Emin Misiniz",
            modalBildirimNo + " No'lu İşlemi kapatmaya emin misiniz? ",
            [
                {
                text: "Cancel",
                onPress: () => setModalCall(modalCall),
                style: "cancel"
                },
                { text: "OK", onPress: () => setModalCall(!modalCall)}
            ]
            );
    }
    const onSearch = (search) =>{
      setSearchUpper(search.toUpperCase());
      setSearch(search);
      //arama butonu
      
    }
    //Filter
    if(StartedWorksDummyData1.filter(x=>String(x.SAPKullanici).includes(searchUpper))[0]){
      FilterResult=[];
      FilterResult=StartedWorksDummyData1.filter(x=>String(x.SAPKullanici).includes(searchUpper));
      for (let i = 0; i < StartedWorksDummyData1.filter(x => String(x.SAPKullanici).includes(searchUpper)).length; i++){
        StartedWorksDummyData2.push(
          FilterResult[i]
        );
      }
    }else{
      FilterResult=[];
      FilterResult=StartedWorksDummyData1.filter(x => String(x.BildirimNo).includes(search));
      for (let i = 0; i < StartedWorksDummyData1.filter(x => String(x.BildirimNo).includes(search)).length; i++){
        StartedWorksDummyData2.push(
          FilterResult[i]
        );
      }
    }  
    //Main Data
    if(search != "" && StartedWorksDummyData2 != ""){
      dummydata=[];
      for (let i = 0; i < StartedWorksDummyData2.length; i++){
        dummydata.push(
          <View key={i} style={styles.container} >
          <TouchableOpacity 
            style={{
                height:130,
                width:"95%",
                flexDirection:"row",  
                backgroundColor: loginID==StartedWorksDummyData2[i].SAPKullanici ? "#1272a3": "#71aac8",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}} 
                onPress={()=>onPressStartedWorks(StartedWorksDummyData2[i].SAPKullanici,StartedWorksDummyData2[i].BildirimNo)} >
            <View style={styles.ViewStyle1} >
              <Text style={{fontWeight:"bold", fontSize:13, color:"black"}}>BildirimNo:</Text>
              <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>{StartedWorksDummyData2[i].BildirimNo}</Text>
              <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>SAP Kullanıcı:</Text>
              <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{StartedWorksDummyData2[i].SAPKullanici}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData2[i].TeknikBirimTanimi}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData2[i].ArizaKodu} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData2[i].EkipmanTanimi} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData2[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Bildirim Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData2[i].ArizaBaslangic}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>Bildiren: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{StartedWorksDummyData2[i].Bildiren}</Text>
              </View> 
            </View>        
          </TouchableOpacity>
          </View>
        );
      }
    }
    if(search == ""){
      dummydata=[];
      for (let i = 0; i < StartedWorksDummyData1.length; i++){
        dummydata.push(
          <View key={i} style={styles.container} >
          <TouchableOpacity 
            style={{
                height:130,
                width:"95%",
                flexDirection:"row",  
                backgroundColor: loginID==StartedWorksDummyData1[i].SAPKullanici ? "#1272a3": "#71aac8",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}} 
                onPress={()=>onPressStartedWorks(StartedWorksDummyData1[i].SAPKullanici,StartedWorksDummyData1[i].BildirimNo)} >
            <View style={styles.ViewStyle1} >
              <Text style={{fontWeight:"bold", fontSize:13, color:"black"}}>BildirimNo:</Text>
              <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>{StartedWorksDummyData1[i].BildirimNo}</Text>
              <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>SAP Kullanıcı:</Text>
              <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{StartedWorksDummyData1[i].SAPKullanici}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData1[i].TeknikBirimTanimi}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData1[i].ArizaKodu} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData1[i].EkipmanTanimi} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData1[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Bildirim Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{StartedWorksDummyData1[i].ArizaBaslangic}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>Bildiren: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{StartedWorksDummyData1[i].Bildiren}</Text>
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
        { 
            isLoading ? 
            <ActivityIndicator 
              style={{ height: 80,justifyContent:"center", alignItems:"center" }} 
              color="#e33939"
              size="large"/> : <Text>{dummydata}</Text>
        }
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalCall}
              onRequestClose={() => {
                  Alert.alert(
                  "Emin Misiniz",
                  modalBildirimNo + " No'lu İşlemi kapatmaya emin misiniz? ",
                  [
                      {
                      text: "Cancel",
                      onPress: () => setModalCall(modalCall),
                      style: "cancel"
                      },
                      { text: "OK", onPress: () => setModalCall(!modalCall)}
                  ]
                  );
                  
              }}
              >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>{modalSAPKullanici}-{modalBildirimNo}</Text>
                  <View style={{padding:10}}>
                      <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => { takeABreak() }} //Ara Ver
                      >
                      <MaterialCommunityIcons name="cog-pause" color="white" size={25}/>
                      <Text style={styles.textStyle}>Ara Ver</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{padding:10}}>
                      <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                          Alert.alert(
                          "Emin Misiniz",
                          modalBildirimNo + " No'lu İşi bitirmeye emin misiniz? ",
                          [
                              {
                              text: "Cancel",
                              onPress: () => setModalCall(modalCall),
                              style: "cancel"
                              },
                              { text: "OK", onPress: () => finishTheJob()}
                          ]
                          );
                          
                      }} //işi Bitir
                      >
                      <MaterialCommunityIcons name="calendar-check" color="white" size={25} />
                      <Text style={styles.textStyle}>İşi Bitir</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{padding:10}}>
                      <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => consumeMaterial(modalBildirimNo,modalSAPKullanici,loginID,password)} //Malzeme Tüket
                      >
                      <MaterialCommunityIcons name="beaker-minus" color="white" size={25} />
                      <Text style={styles.textStyle}>Malzeme Tüket</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{padding:10}}>
                      <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                          Alert.alert(
                          "Emin Misiniz",
                          modalBildirimNo + " No'lu İşi bitirmeye emin misiniz? ",
                          [
                              {
                              text: "Cancel",
                              onPress: () => setModalCall(modalCall),
                              style: "cancel"
                              },
                              { text: "OK", onPress: () => completeTheJob()}
                          ]
                          );
                          
                      }} //İşi Tamamla
                      >
                      <MaterialCommunityIcons name="handshake" color="white" size={25} />
                      <Text style={styles.textStyle}>İşi Tamamla</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{padding:10}}>
                      <TouchableOpacity
                      style={styles.cancel}
                      onPress={() => cancelTheJob()} //işi devret buton
                      >
                      <Text style={{...styles.textStyle, color:"black"}}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
                  </View>
              </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalTakeABreak}
            onRequestClose={() => {
              Alert.alert(
                "Emin Misiniz",
                modalBildirimNo + " No'lu İşlemi kapatmaya emin misiniz? ",
                [
                  {
                    text: "Cancel",
                    onPress: () => setModalTakeABreak(modalTakeABreak),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => setModalTakeABreak(!modalTakeABreak)}
                ]
              );
              
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalTakeABreak}>
                  <View style={{alignItems:"center"}}>
                    <Text style={styles.modalTakeABreakText}>{modalSAPKullanici}-{modalBildirimNo}</Text>
                    <Text style={styles.modalTakeABreakText}> ARA VER</Text>
                    <SelectDropdown
                        data={breakReason}
                        // defaultValueByIndex={1}
                        // defaultValue={'England'}
                        onSelect={(selectedItem, index) => {
                        setTakeABreakReason(selectedItem);
                        }}
                        defaultButtonText={'ARA NEDENİ'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        return takeABreakReason;
                        }}
                        rowTextForSelection={(item, index) => {
                        return item;
                        }}
                        buttonStyle={styles.SelectButonStyle}
                        buttonTextStyle={styles.SelectButonTxtStyle}
                        renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#6782B4'} size={18} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.SelectDropdownStyle}
                        rowStyle={styles.SelectRowStyle}
                        rowTextStyle={styles.SelectRowTxtStyle}
                    />

                  </View>
                  <View style={{padding:10, flexDirection:"row", justifyContent:"space-evenly", width:"100%"}}>
                      <TouchableOpacity
                      style={styles.okey}
                      onPress={() => setModalTakeABreak(!modalTakeABreak)} //işi devret buton
                      >
                      <FontAwesome name={'check'} color={'#1272a3'} size={18} />
                      <Text style={{...styles.textStyle, color:"#1272a3"}}>Onayla</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={styles.cancel}
                      onPress={() => setModalTakeABreak(!modalTakeABreak)} //işi devret buton
                      >
                        <Feather name={'x'} color={'red'} size={18} />
                      <Text style={{...styles.textStyle, color:"red"}}>Kapat</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
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
      height:height/2,
      width:width/2,
    },
    modalTakeABreak:{
      margin: 10,
      backgroundColor: "#3e7896",
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
      height:height/4,
      width:width/1.5,
    },
    button: {
      borderRadius: 20,
      padding:10,
      elevation: 2,
      width:width/3,
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
      flexDirection:"row",
      justifyContent: "space-evenly",
      borderColor:"red",
    },
    okey: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:width/4,
      backgroundColor:"white",
      flexDirection:"row",
      justifyContent: "space-evenly",
      
    },
    SelectDropdownStyle: {
      backgroundColor: 'red',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderRadius:15,
    },
    SelectRowStyle: {
        backgroundColor:'#FFFFFF', 
        borderBottomColor: '#C5C5C5'
    },
    SelectRowTxtStyle: {
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    SelectButonStyle: {
      width: "80%",
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
    },
    SelectButonTxtStyle: {
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    modalTakeABreakText: {
      fontWeight:"bold",
      paddingBottom:5,
      fontSize:15,
      color:"white"
    },
});