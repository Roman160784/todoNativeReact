import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BODY, PADDING } from './src/consts';
import { Main } from './src/Main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function App() {
  return ( 
  <GestureHandlerRootView style={{ flex: 1 }}>

  <View style={styles.container}>
      <Main />
      <StatusBar style="auto" />
  </View>

    </GestureHandlerRootView >
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingTop: 50,
    paddingHorizontal: PADDING,
  },
});
