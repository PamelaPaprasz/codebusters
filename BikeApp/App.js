import React from 'react';
import { Component, StyleSheet, Text, TextInput, View } from 'react-native';

import NavBar from './components/Navbar';
import Map from './components/Map';

export default class App extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <NavBar/>
       <Map/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});