import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  console.log("deneme");
  return (
    <View style={styles.container}>
      <Text>hello Word </Text>
    
    <Text>hello Word </Text>
<Text>hello Word </Text>
      <StatusBar style="auto" />
        <Text>hello Word </Text>
        <Button title="deneem" ></Button>
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