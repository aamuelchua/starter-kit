import React from 'react';
import { Text, View,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TitleScreen from '../Experia/screen/TitleScreen';
import HomeScreen from '../Experia/screen/HomeScreen';
import TestARSite from './screen/TestARSite';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

function App() {
  const Stack = createStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
          gestureEnabled:false,
        }}
      >
        <Stack.Screen 
          name="Title"
          component={TitleScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="ARPlayer"
          component={TestARSite}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;