import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, imageBackground, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.homeContainer}>

        <ImageBackground source={require('./assets/images/cherry.jpeg')}
        style={styles.image}></ImageBackground>
        
        <View style={styles.titles}>
          <Text style={styles.title}>12345 SW Main St</Text>
          <Text style={styles.subtitle}>3 bed, 2 bath, 1,500sqft</Text>
          <Text style={styles.subtitle}>$1,995/month</Text>
        </View>
      
      </View>

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

  homeContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '35%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 20,
    color: 'grey',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
