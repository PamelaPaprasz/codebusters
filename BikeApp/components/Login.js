import React from 'react';
import { StyleSheet, Text, View, TextInput, Component, Button} from 'react-native';

import Ajax from './AjaxReqs';
let ajax = new Ajax();

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userName: '', password:'' };
  }

  test() {
    let message = {"username": this.state.userName, "password": this.state.password};
    ajax.postData('/login', message)
      .then((res) => {
        alert(res.result)
      })
  }

  render() {
    return (
      <View style={styles.box}>
        <Text style ={styles.loginText}>User name:</Text>
        <TextInput style={styles.inputs} onChangeText={(userName) => this.setState({userName})} value={this.state.userName} />
        <Text style ={styles.loginText}>Password:</Text>
        <TextInput style={styles.inputs} onChangeText={(password) => this.setState({password})}  value={this.state.password} secureTextEntry={true}/>
        <Button onPress={this.test.bind(this)} title='Sign in'/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
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
  }
});