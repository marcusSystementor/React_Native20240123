
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    
  <View style={styles.container}>
    <Text style={styles.firstText}>Hello World!</Text>
    <Button title="Press me" onPress={() => (console.log("Test"))}/> 
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

  firstText: {
    backgroundColor: "red",
    fontSize: 20,
  }

});
