import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text,View,StyleSheet} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const Tabs = ({ route })=> {
    
    return(
        <Tab.Navigator initialRouteName='Açık İşler' 
        screenOptions={{
            tabBarShowLabel:false,
            style:{
                position: 'absoulute',
                bottom: 25,
                left:20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}
    >
        <Tab.Screen name="Açık İşler" component={StoppageScreen} initialParams={{ARBPL:ARBPL,loginID: loginID,password:password}}
            options = {{
            tabBarIcon:({focused}) =>(
                <View alignItems = 'center'>
                    <AntIcon name="piechart" color="#37C2D0" size={25} 
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  />
                    <Text style={{color: focused ?'#e32f45' : '#748c94', fontSize:12}} >
                      
                    </Text>
                </View>
            ),
             }} />
        <Tab.Screen name="Tayinli İşler" component={OperatorList} style={{ justifyContent: 'center' }} initialParams={{ARBPL:ARBPL,loginID: loginID,password:password}}
            
             options = {{
                tabBarIcon:({focused}) =>(
                    <View alignItems = 'center'>
                        <AntIcon name="table" color="#37C2D0" size={25} 
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  />
                        <Text style={{color: focused ?'#e32f45' : '#748c94', fontSize:12}} >
                            
                        </Text>
                    </View>
                ),
                 }}
        />
        <Tab.Screen name="Başlanan İşler" component={ProductionLineChart} initialParams={{ARBPL:ARBPL,loginID: loginID,password:password}}
            options = {{
                tabBarIcon:({focused}) =>(
                    <View alignItems = 'center'>
                        <AntIcon name="linechart" color="#37C2D0" size={25} 
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  />
                        <Text style={{color: focused ?'#e32f45' : '#748c94', fontSize:12}} >
                          
                        </Text>
                    </View>
                ),
                 }}
        />
        <Tab.Screen name="Tamamlanan İşler" component={StoppageReason} initialParams={{ARBPL:ARBPL,loginID: loginID,password:password}}
            options = {{
                tabBarIcon:({focused}) =>(
                    <View alignItems = 'center'>
                        <AntIcon name="barchart" color="#37C2D0" size={25} 
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  />
                        <Text style={{color: focused ?'#e32f45' : '#748c94', fontSize:12}} >
                           
                        </Text>
                    </View>
                ),
                 }}
        />
    </Tab.Navigator>
    );
}

const styles=StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset: {
            width: 0,
            height:10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});


export default Tabs;
