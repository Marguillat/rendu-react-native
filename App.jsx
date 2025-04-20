/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Config from 'react-native-config';
import Bootsplash from 'react-native-bootsplash'
import MainNavigator from './src/navigation/MainNavigator'


function App() {
  return (
    <NavigationContainer
      onReady={()=>{
          Bootsplash.hide({fade:true})
        }
      }
    >
      <MainNavigator/>
    </NavigationContainer>
  )
}


export default App;
