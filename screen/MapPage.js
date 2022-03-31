import React from "react";
import {View, Text, StyleSheet,Dimensions,Image,ScrollView, useWindowDimensions } from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';

function MapPage(){
    const {height} = useWindowDimensions()
    return(
        <View style={styles.container}>
            <View style={styles.pdf}>
                    <PinchZoomView>
                    <Image
                        source={require('../assets/client-assets/map.png')}
                        style={[styles.pdf,{height}]}
                        
                    />
                    </PinchZoomView>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    pdf: {
        resizeMode:'contain',
    }
    
})


export default MapPage;