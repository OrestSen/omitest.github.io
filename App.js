import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/loginScreen'
import DashboardScreen from './screens/dashboardScreen'
import AuthLoadingScreen from './screens/authLoadingScreen'
import AppCotainer from './routes'


const App = () => {
  return (
    <AppCotainer style={styles.container} />
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#eceded',

  }
})
