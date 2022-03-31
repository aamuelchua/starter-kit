import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,SafeAreaView, TouchableOpacity, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import MapPage from './MapPage';
import React from 'react';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainHome"
        component={HomePage}
        options={{
            title:'Home'
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapPage}
      />
    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
    container: {
       flex:1,
    },
    imageContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    image:{
      flex:1,
      justifyContent:'center',
    },
    title:{
      fontWeight:'bold',
      color:'white',
      textAlign:'center',
      fontSize:40
    },
    subtitle:{
      color:'white',
      textAlign:'center',
      marginTop:15,
      fontSize:20
    },
    footer:{
      position:'absolute',
      left:0,
      right:0,
      bottom:0,
      flex:1,
      justifyContent:'space-around',
      flexDirection:'row'
    },
    footerText:{
      padding:0,
      flex:1,
      color:'white',
      textAlign:'center'
    },
    Experia:{
      textAlign:'center',
      fontSize:30,
      fontWeight:'bold',
      color:'white'
    },
  });

export default HomeScreen;