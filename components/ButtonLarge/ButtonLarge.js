import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';



export default function ButtonLarge(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}>
      <Text
        style={styles.title}
      >
        {props.title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'deepskyblue',
    height: 50,
    width: 200,
    marginBottom: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 48,
  },
});