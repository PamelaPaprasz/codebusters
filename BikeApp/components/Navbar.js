import React from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, Component, Image, TouchableOpacity, Lightbox, LightboxView, TextInput } from 'react-native';
import Modal from 'react-native-modal'

export default class Login extends React.Component {
  state = {
    isModalVisible: false
  }
 
  _showModal = () => this.setState({ isModalVisible: true })
 
  _hideModal = () => this.setState({ isModalVisible: false })

  render() {
    return (
      <View style ={styles.navbar}>
          <View style ={styles.container}>
            <Image
              source={require('../img/menu.png')}
              style={styles.menuPictures}
            />
            <Image
              source={require('../img/accident.png')}
              style={styles.bikePicture}
            />
          </View>
          <View>
            <TouchableOpacity onPress={this._showModal}>
              <Image
                style={styles.reportPicture}
                source={require('../img/report.png')}
              />
            </TouchableOpacity>
            <Modal isVisible={this.state.isModalVisible}>
              <View style={{ backgroundColor: 'grey' }}>
              <Text style={{fontSize: 40}}>Report</Text>
          </View>
        </Modal>
          </View>
      {/*<TextInput
        style={{height: 40, width: 80, borderColor: 'gray', borderWidth: 1}}
      />*/}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar:{
    height: 80,
    width: '100%',
    backgroundColor: '#045F7D',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'space-between'
  },
  menuPictures:{
    marginLeft: 20,
    marginTop: 35,
    width: 25, 
    height: 25, 
    margin: 10
  }, 
  container:{
    flexDirection: 'row',
  },
  bikePicture:{
    marginLeft: 20,
    marginTop: 30,
    width: 35, 
    height: 35, 
    margin: 10,
  },
  reportPicture:{
    marginLeft: 20,
    marginRight: 15,
    marginTop: 30,
    width: 35, 
    height: 35, 
    margin: 10
  }
  }
);

/*import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  }
 
  _showModal = () => this.setState({ isModalVisible: true })
 
  _hideModal = () => this.setState({ isModalVisible: false })
 
  render () {
    return (
      <View style={{ flex: 1, width: 100, height: 100}}>
        <TouchableOpacity onPress={this._showModal}>
          <Text style={{fontSize: 50}}>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ backgroundColor: 'pink' }}>
            <Text style={{fontSize: 40}}>Hello Pami!</Text>
          </View>
        </Modal>
      </View>
    )
  }
 
}*/