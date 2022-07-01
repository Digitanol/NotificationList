import React, {useState} from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput ,TouchableOpacity, Dimensions, Modal} from "react-native";
import {StartedWorksDummyData} from "../../data/data";
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const StartedWorks =(props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const [modalCall, setModalCall] = useState(false);
    const [modalSAPKullanici,setModalSAPKullanici]=useState("");
    const [modalBildirimNo,setModalBildirimNo]=useState("");

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
       //Ara ver Çalıştırılacak-SAP Kullanicisi, Bildirim No yukarıdaki modalSAPKUllanicisi ve ModalBildirim No dan çekilecek
    }
    const finishTheJob = () => {
    setModalCall(!modalCall);
    //işi bitir transaction çalıştırılacak-
    }
    const consumeMaterial = () => {
    setModalCall(!modalCall);
    //işi devret transaction çalıştırılacak
    }
    const completeTheJob = () => {
    setModalCall(!modalCall);
    }
    const cancelTheJob = () => {
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

    var dummydata=[];
    for (let i = 0; i < StartedWorksDummyData.length; i++){
        dummydata.push(
          <View key={i} style={styles.container} >
          <TouchableOpacity 
            style={{
                height:130,
                width:"95%",
                flexDirection:"row",  
                backgroundColor: loginID==StartedWorksDummyData[i].SAPKullanici ? "#1272a3": "#71aac8",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}} 
                onPress={()=>onPressStartedWorks(StartedWorksDummyData[i].SAPKullanici,StartedWorksDummyData[i].BildirimNo)} >
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
                        onPress={() => {
                            Alert.alert(
                            "Emin Misiniz",
                            modalBildirimNo + " No'lu İş için ara vermeye emin misiniz? ",
                            [
                                {
                                text: "Cancel",
                                onPress: () => setModalCall(modalCall),
                                style: "cancel"
                                },
                                { text: "OK", onPress: () => takeABreak()}
                            ]
                            );
                            
                        }} //Ara Ver
                        >
                        <MaterialCommunityIcons name="arm-flex" color="white" size={25}/>
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
                        <MaterialCommunityIcons name="handshake" color="white" size={25} />
                        <Text style={styles.textStyle}>İşi Bitir</Text>
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
                                { text: "OK", onPress: () => consumeMaterial()}
                            ]
                            );
                            
                        }} //Malzeme Tüket
                        >
                        <MaterialCommunityIcons name="handshake" color="white" size={25} />
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
      height:height/2,
      width:width/2,
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
    }
});