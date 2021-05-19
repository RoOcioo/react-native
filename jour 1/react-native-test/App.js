import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
 
   <Text style={styles.title}>Hello world!</Text> 
   <Image source={{uri: 'http://picsum.photos/200/200'}}
    style={styles.image}/>
   <Button
  color= "pink"
  title= "Press me"
  onPress={() => Alert.alert('Hello')}
    />
   </View>
  
  )
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
     justifyContent: 'center', 
     alignItems: 'center', 
     backgroundColor: '#fff'},
    title: {fontSize: 30},
    image: {height: 190, width: 190, borderRadius: 90}

}); 

export default App