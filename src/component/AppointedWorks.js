import React, {useState} from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput, TouchableOpacity, AppState, Dimensions, Modal} from "react-native";
import {AppointedWorksDummyData} from "../../data/data";
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AppointedWorks = (props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const [modalCall, setModalCall] = useState(false);
    const [modalCall2,setModalCall2]= useState(false);
    const [modalTayinOlan,setModalTayinOlan]=useState("");
    const [modalBildirimNo,setModalBildirimNo]=useState("");

    const startTheWork = (TayinOlan,BildirimNo) => {
      setModalTayinOlan(TayinOlan);
      setModalBildirimNo(BildirimNo);
      if(TayinOlan==loginID){
        setModalCall(true);
      }
      else{
        setModalCall2(true);
      }
    }
    const takeOnTheJob = () => {
      setModalCall(!modalCall);
      //işi al transaction çalıştırılacak
    }
    const handOverTheJob = () => {
      setModalCall(!modalCall);
      //işi devret transaction çalıştırılacak
    }
    const beAppointedToTheJob = () =>{
      setModalCall2(!modalCall2);
    }
    const cancelTheJob = () => {
      if(modalCall){
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
      else{
        Alert.alert(
          "Emin Misiniz",
          modalBildirimNo + " No'lu İşlemi kapatmaya emin misiniz? ",
          [
            {
              text: "Cancel",
              onPress: () => setModalCall2(modalCall2),
              style: "cancel"
            },
            { text: "OK", onPress: () => setModalCall2(!modalCall2)}
          ]
        );
      }
      
    }
    var dummydata=[];
    for (let i = 0; i < AppointedWorksDummyData.length; i++){
        dummydata.push(
          <View key={i} style={styles.container} >
          <TouchableOpacity 
            style={{
                height:130,
                width:"95%",
                flexDirection:"row",  
                backgroundColor: loginID==AppointedWorksDummyData[i].TayinOlan ? "#4caf50": "#f44336",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}} 
                onPress={()=>startTheWork(AppointedWorksDummyData[i].TayinOlan,AppointedWorksDummyData[i].BildirimNo)} >
            <View style={styles.ViewStyle1} >
              <Text style={{fontWeight:"bold", fontSize:13, color:"black"}}>BildirimNo:</Text>
              <Text style={{fontWeight:"bold", fontSize:12, color:"white"}}>{AppointedWorksDummyData[i].BildirimNo}</Text>
              <Text style={{fontSize:13, fontWeight:"bold" , color:"black"}}>Tayin Olan:</Text>
              <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{AppointedWorksDummyData[i].TayinOlan}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Tenik Birim Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{AppointedWorksDummyData[i].TeknikBirimTanimi}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Kodu: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{AppointedWorksDummyData[i].ArizaKodu} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Ekipman Tanımı: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{AppointedWorksDummyData[i].EkipmanTanimi} </Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Arıza Bildirim Açıklaması: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{AppointedWorksDummyData[i].ArizaKoduKisaAciklama}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>Bildirim Tarihi: </Text>
                <Text style={{fontSize:12, fontWeight:"bold",color:"white"}}>{AppointedWorksDummyData[i].ArizaBaslangic}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:12, fontWeight:"bold" , color:"black"}}>Bildiren: </Text>
                <Text style={{fontSize:12, fontWeight:"bold", color:"white"}}>{AppointedWorksDummyData[i].Bildiren}</Text>
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
              <Text style={styles.modalText}>{modalTayinOlan}-{modalBildirimNo}</Text>
              <View style={{padding:10}}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    Alert.alert(
                      "Emin Misiniz",
                      modalBildirimNo + " No'lu İşi almaya emin misiniz? ",
                      [
                        {
                          text: "Cancel",
                          onPress: () => setModalCall(modalCall),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => takeOnTheJob()}
                      ]
                    );
                    
                  }} //işi al buton
                >
                  <MaterialCommunityIcons name="arm-flex" color="white" size={25}/>
                  <Text style={styles.textStyle}>İşi Al</Text>
                </TouchableOpacity>
              </View>
              <View style={{padding:10}}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    Alert.alert(
                      "Emin Misiniz",
                      modalBildirimNo + " No'lu İşi devretmeye emin misiniz? ",
                      [
                        {
                          text: "Cancel",
                          onPress: () => setModalCall(modalCall),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => handOverTheJob()}
                      ]
                    );
                    
                  }} //işi devret buton alert
                >
                  <MaterialCommunityIcons name="handshake" color="white" size={25} />
                  <Text style={styles.textStyle}>İşi Devret</Text>
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
          visible={modalCall2}
          onRequestClose={() => {
            Alert.alert(
              "Emin Misiniz",
              modalBildirimNo + " No'lu İşlemi kapatmaya emin misiniz? ",
              [
                {
                  text: "Cancel",
                  onPress: () => setModalCall2(modalCall2),
                  style: "cancel"
                },
                { text: "OK", onPress: () => setModalCall2(!modalCall2)}
              ]
            );
            
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{modalTayinOlan}-{modalBildirimNo}</Text>
              <View style={{padding:10}}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    Alert.alert(
                      "Emin Misiniz",
                      modalBildirimNo + " No'lu İşe Tayin Olmaya emin misiniz? ",
                      [
                        {
                          text: "Cancel",
                          onPress: () => setModalCall2(modalCall2),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => beAppointedToTheJob()}
                      ]
                    );
                    
                  }} //işi al buton
                >
                  <MaterialIcons name="assignment" color="white" size={25}/>
                  <Text style={styles.textStyle}>Tayin Ol</Text>
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
export default AppointedWorks;
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