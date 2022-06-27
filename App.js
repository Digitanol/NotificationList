import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {test,test2} from './src/controller/test'
import A from './src/component/AhmetPage'

export default function App() {
  console.log("deneme");
  const asd = () =>{
    console.log("adasd")
  }
  return (
    <View style={styles.container}>
      <Text>hello Word </Text>
    
    <Text>hello Word </Text>
<Text>hello Word </Text>
      <StatusBar style="auto" />
        <Text>hello Word </Text>
        <Button title="deneem" 
        onPress={()=> test2()}
        >
        </Button>


        <A />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
