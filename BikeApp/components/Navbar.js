import React from 'react';
import { StyleSheet, Text, View, Component} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style ={styles.navbar}>
        <Text style ={styles.navbarText}>Most</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  navbar:{
    height: 80,
    width: 900,
    backgroundColor: 'pink',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  navbarText:{
    height: 80,
    fontSize: 40,
    color: 'black'
  }
});
