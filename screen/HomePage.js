import React,{useState} from "react";
import {View, Text, StyleSheet, Button, } from 'react-native';
import TestARSite from "./TestARSite";


function HomePage({navigation}){
    const [pageState, setPageState] = useState('Home')
    if (pageState === 'Home'){
        return(
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Button
                    title={'AR mode'}
                    onPress={() => {
                        setPageState('AR')
                        navigation.navigate('ARPlayer')
                    }}
                />
            </View>
        )
    }else{
        console.log('here')
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TestARSite/>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    
})


export default HomePage;