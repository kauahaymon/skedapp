import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCashe } from './src/storage/tokenCache';
import Routes from './src/screens/routes'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

export default function App() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCashe}>
      <SafeAreaView style={styles.container} >
        <StatusBar style='light' />
        <Routes />
      </SafeAreaView>
    </ClerkProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
