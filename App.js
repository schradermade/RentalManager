import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, imageBackground, ImageBackground } from 'react-native';
import HomeItem from './components/HomeItem';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeItem 
      name={'Tualatin Home'}
      address={'12345 SW Main St., Tualatin, OR 97062'}
      rentalStats={'3bd, 2bth, 1500sqft'}
      rentalRate={'$1,995'}
      image={require('./assets/images/cherry.jpeg')}
      />
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
