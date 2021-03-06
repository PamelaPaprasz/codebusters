import React from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, Component, Image, TouchableOpacity, Lightbox, LightboxView, TextInput, Button } from 'react-native';
import Modal from 'react-native-modal'


export default class NavBar extends React.Component {

  state = {
    isModalVisible: false
  };
 
  _showModal = () => this.setState({ isModalVisible: true });
 
  _hideModal = () => this.setState({ isModalVisible: false });

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
              <View style={styles.modal}>
              <Text style={{alignSelf: 'flex-end', fontSize:20, margin: 10}} onPress={this._hideModal}>X</Text>
              <Text style={{fontSize: 40}}>Report:</Text>
              <Text style={{fontSize: 20}}>type:</Text><TextInput style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}/>
              <Text style={{fontSize: 20}}>desciption:</Text><TextInput style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}/>
              <Button
                onPress={this._hideModal}
                title="Send"
                color="black"
              />
          </View>
        </Modal>
          </View>
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
  },
  modal:{
    alignItems: 'center',
    height: 400, 
    width: 320, 
    backgroundColor: '#fff'
  }
  }
);
