import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import SearchInput from './components/SearchInput' ; 

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
       style={styles.container} 
       behavior="padding">

            <Text style={[styles.smallText, styles.textStyle]}>San Francisco</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
            <Text style={[styles.smallText, styles.textStyle]}>24°</Text>

            <SearchInput placeholder="Search any city" />

      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 18,
    },
    textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    },
});
