import React from 'react';
import { ImageBackground, StyleSheet, Text, View,SafeAreaView, TouchableOpacity, } from 'react-native';

function TitleScreen({navigation}){
    return(  
        <View style={styles.container}>
        <ImageBackground source={require('../assets/graphics/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.imageContainer}>
            <Text style={styles.title}>Space-Bonaza</Text>
            <Text style={styles.subtitle}>Singapore's First Space Exhibition</Text>
            <View style={{}}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Home')
                    }}
                >
                    <View style={{backgroundColor:'purple',padding:20,paddingHorizontal:30,borderRadius:15,marginTop:50}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Start Exploring</Text>
                    </View>
                </TouchableOpacity>
            </View>
                <SafeAreaView style={[styles.footer,{paddingBottom:50}]}>
                    <View>
                        <Text style={styles.footerText}>Powered by:</Text>
                        <Text style={styles.Experia}>Experia</Text>
                    </View>
                </SafeAreaView>
            </View>
        </ImageBackground>
        </View>
    )
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

export default TitleScreen;