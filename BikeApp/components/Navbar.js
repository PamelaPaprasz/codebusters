import React from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, Component, Image, TouchableOpacity, TouchableHighLight} from 'react-native';

export default class Login extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style ={styles.navbar}>
            <Image
              source={require('../img/menu.png')}
              style={styles.menuPictures}
            />
          <View style ={styles.container}>
            <Image
              source={require('../img/accident.png')}
              style={styles.bikePicture}
            />
            <TouchableOpacity onPress={this._onPressButton}>
              <Image
                style={styles.reportPicture}
                source={require('../img/report.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar:{
    height: 80,
    width: 900,
    backgroundColor: '#045F7D',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  menuPictures:{
    marginLeft: 20,
    marginTop: 30,
    width: 25, 
    height: 25, 
    margin: 10
  }, 
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bikePicture:{
    marginLeft: 20,
    marginTop: 30,
    width: 35, 
    height: 35, 
    margin: 10
  },
  reportPicture:{
    marginLeft: 20,
    marginTop: 30,
    width: 35, 
    height: 35, 
    margin: 10
  }
  }
);