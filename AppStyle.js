import {View, StyleSheet} from "react-native";


const AppStyle = () => {

  return (
    <View style={styles.container}>
    <View style={styles.box1}></View>
    <View style={styles.box2}></View>
    </View>
  ) 

}
const styles = StyleSheet.create({

  container: {
    
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 100,
  },

box1: {
  width: 50,
  height: 50,
  backgroundColor: "red",

},

box2: {
  width: 50,
  height: 50,
  backgroundColor: "green",
}


})



export default App;