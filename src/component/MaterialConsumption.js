import {View, Text, Alert, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity, RefreshControl} from 'react-native';
import React, { useState,useEffect,useCallback } from 'react';
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const MaterialConsumption = (props) =>{
    const loginID=props.route.params.loginID;
    const password=props.route.params.password;
    const SAPKullanici=props.route.params.SAPKullanici;
    const BildirimNo=props.route.params.bildirimNo;
    const [state,setState]=useState("");
    const [value,setValue]=useState("");
    const [materialNo,setMaterialNo] = useState("");
    const [consumptionQuantity,setConsumptionQuantity] = useState(0);
    const [productionPlaceNo,setProductionPlaceNo] = useState("");
    const [warehouseNo,setWarehouseNo] = useState("");
    const [valuationType,setValuationType] = useState("");
    const [materialDefinition,setMaterialDefinition] = useState("MONITOR");
    const [unit,setUnit] = useState("ADT");
    const [stock,setStock] = useState("100");
    const [refreshing, setRefreshing] = useState(false);
    const MalzemeNo = ["50003", "50004","50005","50006"] ;
    const DegerlemeTuru = ["YENİ", "ARIZALI", "TAMIRLI"];
    const UretimYeri = ["1200", "1300", "1400", "1500"];
    const DepolamaYeri = ["1250", "1350", "1450", "1550"];
    const [MaterialConsumptionData,setMaterialConsumptionData] = useState([]);
    var viewData = [];

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(200).then(() => setRefreshing(false));
    }, []);
    const cancelMaterial = (i) =>{
        if(MaterialConsumptionData[i]!=null){
             MaterialConsumptionData.splice(i,1);
        }
        onRefresh();
    }  
    const saveButton = () =>{
        if(materialNo != "" && consumptionQuantity != 0 && productionPlaceNo != "" && warehouseNo != "" 
            && valuationType != "" && materialDefinition != "" && unit != "" && stock != ""  ){ 
            MaterialConsumptionData.push({
                    materialNo:materialNo,
                    consumptionQuantity :consumptionQuantity,
                    productionPlaceNo: productionPlaceNo,
                    warehouseNo: warehouseNo,
                    valuationType: valuationType,
                    materialDefinition : materialDefinition,
                    unit: unit,
                    stock: stock,
                },);
            setValuationType("");
            setWarehouseNo("");
            setProductionPlaceNo("");
            setMaterialNo("");
        }else{
            Alert.alert(
                "Dikkat",
                "Boş alan bırakmayın",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
    }

    

    if(MaterialConsumptionData!=null && MaterialConsumptionData[0] !=undefined ){
        viewData=[];
        for(let i=0; i<MaterialConsumptionData.length; i++){
            viewData.push(
                <View key={i} style={styles.ContainerViewStyle} >
                    <TouchableOpacity 
                        style={{
                            height:height/5,
                            width:width-20,
                            flexDirection:"row",  
                            backgroundColor:  "#A4BFEF",
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderBottomRightRadius:10,
                            borderBottomLeftRadius:10,
                        }} 
                        onPress={()=>console.log()} >
                        <View style={styles.OpacityMainViewStyle}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{flexDirection:"column",paddingEnd:10}}>
                                    <View  style={{flexDirection:"row",paddingTop:5}}>  
                                        <Text style={styles.DefinitionTextStyle}>Malzeme No:</Text>
                                        <Text style={styles.ParameterTextStyle} >{MaterialConsumptionData[i].materialNo}</Text>
                                    </View>
                                    <View  style={{flexDirection:"row",paddingTop:5}}>
                                        <Text  style={styles.DefinitionTextStyle}>Kullanım Miktarı:</Text>
                                        <Text style={styles.ParameterTextStyle} >{MaterialConsumptionData[i].consumptionQuantity}</Text>
                                    </View>
                                    <View  style={{flexDirection:"row",paddingTop:5}}>
                                        <Text  style={styles.DefinitionTextStyle}>Malzeme Tanımı:</Text>
                                        <Text style={styles.ParameterTextStyle}>{MaterialConsumptionData[i].materialDefinition}</Text>
                                    </View>
                                    <View  style={{flexDirection:"row",paddingTop:5}}>
                                        <Text  style={styles.DefinitionTextStyle}>Birim:</Text>
                                        <Text style={styles.ParameterTextStyle} >{MaterialConsumptionData[i].unit}</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:"column"}}>
                                    <View style={{flexDirection:"row",paddingTop:5}}>
                                        <Text  style={styles.DefinitionTextStyle}>Stok Miktarı:</Text>
                                        <Text style={styles.ParameterTextStyle} >{MaterialConsumptionData[i].stock}</Text>
                                    </View>
                                    <View style={{flexDirection:"row",paddingTop:5}}>
                                        <Text  style={styles.DefinitionTextStyle}>Birim:</Text>
                                        <Text style={styles.ParameterTextStyle} >{MaterialConsumptionData[i].unit}</Text>
                                    </View>
                                    <View style={{flexDirection:"row",paddingTop:5}}>
                                        <Text  style={styles.DefinitionTextStyle}>Üretim Yeri:</Text>
                                        <Text style={styles.ParameterTextStyle} >{MaterialConsumptionData[i].productionPlaceNo}</Text>
                                    </View>
                                    <View  style={{flexDirection:"row",paddingTop:5}}>
                                        <Text  style={styles.DefinitionTextStyle}>Değerleme Türü:</Text>
                                        <Text style={styles.ParameterTextStyle} >{MaterialConsumptionData[i].valuationType}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:"100%", alignItems:"center"}}>
                                <TouchableOpacity 
                                    style={{
                                        height:30,
                                        width:width/5,
                                        flexDirection:"row",  
                                        backgroundColor:  "#6A93CB",
                                        borderTopRightRadius: 10,
                                        borderTopLeftRadius: 10,
                                        borderBottomRightRadius:10,
                                        borderBottomLeftRadius:10,
                                        justifyContent:"center",
                                        alignItems:"center",
                                    }} 
                                    onPress={()=>cancelMaterial(i)} >
                                        <Text style={{fontWeight:"bold",color:"#FFFFFF"}}>İPTAL</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                    </TouchableOpacity>
                </View>
            );
        }
    }

    return(
        <View>
            <View style={styles.View1Style}>
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Malzeme No</Text>
                    <SelectDropdown
                        data={MalzemeNo}
                        // defaultValueByIndex={1}
                        // defaultValue={'England'}
                        onSelect={(selectedItem, index) => {
                        setMaterialNo(selectedItem);
                        }}
                        defaultButtonText={'Malzeme No'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        return materialNo;
                        }}
                        rowTextForSelection={(item, index) => {
                        return item;
                        }}
                        buttonStyle={{...styles.SelectButonStyle,width:width/2.5}}
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
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Kullanım Miktarı</Text>
                    <NumericInput 
                        value={parseInt(value)} 
                        onChange={value => setConsumptionQuantity(value)} 
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={width/2.5} 
                        totalHeight={45} 
                        iconSize={25}
                        step={1}
                        minValue={0}
                        valueType="real"
                        rounded 
                        textColor='#000000' 
                        iconStyle={{ color: '#FFFFFF' }} 
                        rightButtonBackgroundColor='#6782B4' 
                        leftButtonBackgroundColor='#B1BFD8' 
                        />
                </View>
            </View>
            <View style={styles.View1Style}>        
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Malzeme Tanımı</Text>
                    <Text>MONITOR</Text>
                </View>
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Birim</Text>
                    <Text>ADT</Text>
                </View>
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Stok Miktarı</Text>
                    <Text>100</Text>
                </View>
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Birim</Text>
                    <Text>ADT</Text>
                </View>
            </View>
            <View style={{...styles.View1Style}}>
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Üretim Yeri</Text>
                    <SelectDropdown
                        data={UretimYeri}
                        // defaultValueByIndex={1}
                        // defaultValue={'England'}
                        onSelect={(selectedItem, index) => {
                        setProductionPlaceNo(selectedItem);
                        }}
                        defaultButtonText={'Üretim Yeri'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        return productionPlaceNo;
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
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Depo Yeri</Text>
                    <SelectDropdown
                        data={DepolamaYeri}
                        // defaultValueByIndex={1}
                        // defaultValue={'England'}
                        onSelect={(selectedItem, index) => {
                        setWarehouseNo(selectedItem);
                        }}
                        defaultButtonText={'Depo Yeri'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        return warehouseNo;
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
                <View style={styles.View2Style}>
                    <Text style={styles.TextStyle}>Değerleme Türü</Text>
                    <SelectDropdown
                        data={DegerlemeTuru}
                        // defaultValueByIndex={1}
                        // defaultValue={'England'}
                        onSelect={(selectedItem, index) => {
                        setValuationType(selectedItem);
                        }}
                        defaultButtonText={'Değerleme Türü'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        return valuationType;
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
            </View>
            <View style={{...styles.View2Style,paddingTop:10, paddingBottom:10, borderBottomColor:"#6A93CB",borderBottomWidth:0.5,borderBottomStartRadius:30,borderBottomEndRadius:30}}>
                <TouchableOpacity
                      style={styles.SaveButton}
                      onPress={() => saveButton()} //KAYDET BUTONU
                      >
                      <Text style={{...styles.TextStyle, color:"#FFFFFF",borderBottomColor:"#6A93CB",}}>Kaydet</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.ScrollViewStyle} 
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
            }>
              <Text>{viewData}</Text> 
            </ScrollView>
        </View>
    );
}
export default MaterialConsumption
const styles = StyleSheet.create({
    ContainerViewStyle:{
        paddingBottom:5,
        paddingTop:5,
        alignItems:"center",
        justifyContent:"center",
        paddingRight:10,
        
    },
    OpacityMainViewStyle:{
        flexDirection:"column", 
        justifyContent:"space-between",
        paddingLeft:5,
        paddingRight:5,
        width:width,
    },
    View1Style:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        paddingTop:10,
    },
    View2Style:{
        flexDirection:"column",
        alignItems:"center"
    },
    ScrollViewStyle:{
        height:height/1.75,
        paddingLeft:10,
        paddingRight:10,
    },
    TextStyle:{
        fontWeight:"bold",
        borderBottomColor:"#A4BFEF",
        borderBottomWidth:0.2,
        borderBottomStartRadius:width/3,
        borderBottomEndRadius:width/3,
        paddingBottom:2
    },
    DefinitionTextStyle:{
        fontWeight:"bold",
  
    },
    ParameterTextStyle:{
        color:"#FFFFFF",
        fontWeight:"bold"
    },
    SelectButonStyle: {
      width: width/3.2,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
    },
    SelectButonTxtStyle: {
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
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
    SaveButton:{
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:width/3,
      backgroundColor:"#6A93CB",
      alignItems:"center"
    }
  });