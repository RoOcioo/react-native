import React, { useState } from 'react';  
import { StyleSheet, Text, View, Button, ScrollView, Image, Alert, ActivityIndicator } from 'react-native';
import image from './img/konexio-logo_1.png'

export default function App() {

  const [showLoading, setShowLoading] = useState(false);

  function onPressButton() {
    console.log("hello");
    Alert.alert("You clicked me")

    setShowLoading(true)
  }

  return (
    <ScrollView style={styles.container}>
    <View style={styles.text}>
      <Text style={styles.title}>
        Hello !
      </Text>
      <Text style={styles.title2}>
        Bonjour !
      </Text>
      <Text style={styles.title3}>
       Hola !
      </Text>
      <Image
        source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
        style={styles.image} />
      <Image
        source={image}
        style={styles.image} />
      <Button
        onPress={() => {
          Alert.alert('You clicked!');
        }}
        title="Press Me" color="deepskyblue"
      />
       <Button style={{ marginTop: 10 }} title="Activity" onPress={onPressButton}></Button>
      <ActivityIndicator style={styles.activity} animated= {showLoading} />
    </View >
  </ScrollView >
);

}
const styles = StyleSheet.create({
container: {
  backgroundColor: 'blue',
},
text: {
  backgroundColor: '#fff',
  marginTop: 80,
  width: 400,
  margin: 'auto'
},
title: {
  fontSize: 30
},
title2: {
  textAlign: 'center'
},
title3: {
  fontWeight: 'bold'
}, wrapperCustom: {
  borderRadius: 8,
  padding: 6
},
image: {
  width: 315,
  height: 100,
  margin: 'auto'
},
activity: {
  size:"large",
  color:"#00ff00"

}
});