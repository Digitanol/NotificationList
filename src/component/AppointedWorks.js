import React, {useState} from "react";
import { StyleSheet, Alert, Text, View, Image, TextInput, TouchableOpacity, AppState, Dimensions, Modal} from "react-native";
import {AppointedWorksDummyData} from "../../data/data";
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AppointedWorks = (props) => {
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const [takeTheJob, setTakeTheJob] = useState(false);
    const [modalTayinOlan,setModalTayinOlan]=useState("");

    const startTheWork = (param) => {
      setModalTayinOlan(param);
      if(param==loginID){
        setTakeTheJob(true);
      }
      else{

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
                onPress={()=>startTheWork(AppointedWorksDummyData[i].TayinOlan)} >
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
          visible={takeTheJob}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setTakeTheJob(!takeTheJob);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{modalTayinOlan}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setTakeTheJob(!takeTheJob)}
              >
                <Text style={styles.textStyle}>İşi Al</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setTakeTheJob(!takeTheJob)}
              >
                <Text style={styles.textStyle}>İşi Devret</Text>
              </TouchableOpacity>
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
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height:220,
      width:220,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});