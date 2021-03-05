import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyleButton = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Pressable
        style={styles.button}
        onPress={() => {
          console.warn('Im down here!')
        }}
        >
          <Text style={styles.text}>House Avail!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StyleButton;