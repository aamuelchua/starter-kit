import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroImage,
  ViroAnimations
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Hello, World');

  function onInitialized(state, reason) {
    
  }
  ViroAnimations.registerAnimations({
    animateEarth:{
      properties:{
        rotateY: "+=45"
      },
      easing:"Linear", 
      duration: 1000
    },
  });
  return (
    <ViroARScene>
    <ViroAmbientLight color="#FFFFFF" />
      <Viro3DObject
        source={require('../assets/Earth/earth.gltf')}
        scale={[ 0.1, 0.1, 0.1 ]}
          position={[ 0, 0, -5 ]}
        type="GLTF"
        resources={[
          require('../assets/Earth/earth.bin'),
          require('../assets/Earth/151534030-world-texture-satellite-image-of-the-earth-high-resolution-texture-of-the-planet-with-relief-shading.jpg')
        ]}
        onLoadStart={console.log("start")}
        onLoadEnd={console.log('end')}
        onError={(e)=>console.log(e)}
        animation={{
          name: 'animateEarth',
          run: true,
          loop: true,
        }}
      />
      {/* <ViroText 
        text="Hello World"
        position={[0, -.1, -1]}
          
      />
      <ViroImage
        source={require('./assets/Earth/151534030-world-texture-satellite-image-of-the-earth-high-resolution-texture-of-the-planet-with-relief-shading.jpg')}
        onTouch={()=>console.log('Hello')}
      /> */}
    </ViroARScene>
  );
};

export default  TestARSite = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
