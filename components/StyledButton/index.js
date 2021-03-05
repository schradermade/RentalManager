import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyleButton = (props) => {

  const type = props.type;
  const content = props.content;
  const onPress = props.onPress;

  const backgroundColor = type === 'primary' ? 'grey' : 'white';
  const textColor = type === 'primary' ? 'white' : 'grey';

  console.warn(type);
  return (
    <View>
      <View style={styles.container}>
        <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
        >
          {/* {content} will dynamically insert button text from const declared on line 8*/}
          <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StyleButton;