import React from 'react';
import { StyleSheet, Text, View, TextInput, Component, Button, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Ajax from './AjaxReqs';
let ajax = new Ajax();

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userName: '', password:'' };
  }

  login() {
    let message = {"username": this.state.userName, "password": this.state.password};
    ajax.postData('/login', message)
      .then((res) => {
        if (res.result === 'success') {
          this.setState({
            userName: '', password:''
          });
          Actions.bikeApp()
        } else {
          alert('Wrong username or password please try again!');
          this.setState({
            userName: '', password:''
          })
        }
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Image source={require('../img/accident.png')} style={styles.logo}/>
          <Text style ={styles.loginText}>User name:</Text>
          <TextInput style={styles.inputs} onChangeText={(userName) => this.setState({userName})} value={this.state.userName} />
          <Text style ={styles.loginText}>Password:</Text>
          <TextInput style={styles.inputs} onChangeText={(password) => this.setState({password})}  value={this.state.password} secureTextEntry={true}/>
          <Button onPress={this.login.bind(this)} title='Sign in'/>
        </View>
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
    backgroundColor: 'yellow'
  },
  box:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  inputs:{
    width: 150,
    marginBottom: 10,
    fontSize: 15,
  },
  loginText:{
    fontSize: 25,
    color: 'black'
  },
  logo:{
    height: 150,
    width: 150,
    marginBottom: 20,
    backgroundColor: 'steelblue',
    borderRadius: -150
  }
});