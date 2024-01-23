import {View, StyleSheet, Text, Button} from "react-native";
import { useState } from "react";


const App = () => {

  const [count, setCount] = useState(0);

  function addToCount() {
    setCount(count + 1);
  }

  const countToZero = () => {
    setCount(count == 0);
  }


  return (
    <View style={styles.container}>
    <Text style={styles.countText}>{count}</Text>
    <View style={styles.box1}>
    <Button title="Press me" onPress={addToCount}/>
    <Button title="Press me" onPress={countToZero}/>
    </View>
    </View>
  ) 

}
const styles = StyleSheet.create({

  container: {
    
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 100,
  },

box1: {
  width: 50,
  height: 100,
 

},

box2: {
  width: 50,
  height: 50,
  backgroundColor: "green",
},

countText: {
  fontSize: 50,
}


})



export default App;