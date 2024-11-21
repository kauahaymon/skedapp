import { 
  SafeAreaView, 
  StyleSheet, 
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/screens/routes';


export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style='light' />
      <Routes />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})