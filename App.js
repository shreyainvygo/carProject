import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';
import createBottomTabNavigator from './components/explore'
import {ImageBackground} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      
       <createBottomTabNavigator/>
    </View>
  );
}
//wrap everything in view tag 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//width, hegth% is % of screen