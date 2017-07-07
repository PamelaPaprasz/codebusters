import React from 'react';
import { StyleSheet, Text, View, Component} from 'react-native';

import NavBar from './components/Navbar';
import Map from './components/Map';
import Login from './components/Login';

export default class App extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <NavBar/>
       <Login/>
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