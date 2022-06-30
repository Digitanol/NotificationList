import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text,View,StyleSheet} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import AppointedWorks from '../src/component/AppointedWorks';
import CompletedWorks from '../src/component/CompletedWorks';
import OpenWorks from '../src/component/OpenWorks';
import StartedWorks from '../src/component/StartedWorks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = ({ route })=> {
    const loginID=route.params.loginID;
    const password=route.params.password;
    return(
        <Tab.Navigator initialRouteName='Açık İşler' 
        screenOptions={{
            tabBarShowLabel:false,
            style:{
                position: 'absoulute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 150,
                ...styles.shadow
            }
        }}
    >
        <Tab.Screen name="Açık İşler" component={OpenWorks} initialParams={{loginID: loginID,password:password}}
            options = {{
            tabBarIcon:({focused}) =>(
                <View alignItems = 'center'>
                    <AntIcon name="tool" color="#d07737" size={30} 
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  />
                    <Text style={{color: focused ?'#e32f45' : '#748c94', fontSize:12}} >
                    Açık İşler
                    </Text>
                </View>
            ),
             }} />
        <Tab.Screen name="Tayinli İşler" component={AppointedWorks} style={{ justifyContent: 'center' }} initialParams={{loginID: loginID,password:password}}
            
             options = {{
                tabBarIcon:({focused}) =>(
                    <View alignItems = 'center'>
                        <MaterialCommunityIcons name="tools" color="#d04137" size={25} 
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  />
                        <Text style={{color: focused ?'#e32f45' : '#748c94', fontSize:12}} >
                        Tayinli İşler
                        </Text>
                    </View>
                ),
                 }}
        />
        <Tab.Screen name="Başlanan İşler" component={StartedWorks} initialParams={{loginID: loginID,password:password}}
            options = {{
                tabBarIcon:({focused}) =>(
                    <View alignItems = 'center'>
                        <MaterialCommunityIcons name="calendar-start" color="#71aac8" size={25} 
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  />
                        <Text style={{color: focused ?'#e32f45' : '#748c94', fontSize:12}} >
                        Başlanan İşler
                        </Text>
                    </View>
                ),
                 }}
        />
        <Tab.Screen name="Tamamlanan İşler" component={CompletedWorks} initialParams={{loginID: loginID,password:password}}
            options = {{
                tabBarIcon:({focused}) =>(
                    <View alignItems = 'center'>
                        <MaterialCommunityIcons name="calendar-check" color="#37d079" size={25} 
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  />
                        <Text style={{color: focused ?'#e32f45' : '#748c94', fontSize:12}} >
                        Tamamlanan İşler
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
            height:20,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 15
    }
});


export default Tabs;
