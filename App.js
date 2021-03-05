import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.homeContainer}>
         
         <View>
           <Text>12345 SW Main St</Text>
           <Text>3 bed, 2 bath, 1,500sqft</Text>
           <Text>$1,995/month</Text>
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

  }
});
