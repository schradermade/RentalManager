import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, imageBackground, ImageBackground } from 'react-native';
import HomeItem from './components/HomeItem';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
