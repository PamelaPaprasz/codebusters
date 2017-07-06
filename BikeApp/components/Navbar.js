/*import React from 'react';
import { StyleSheet, Text, View, Component, Image} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
        <View style ={styles.container}>
          <View style ={styles.navbar}>
            <Image
              source={require('../img/menu.png')}
              style={{width: 40, height: 40, margin: 15}}
            />
            <Image
              source={require('../img/accident.png')}
              style={{width: 50, height: 50, margin: 10}}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
})*/

import React from 'react';
import { StyleSheet, Text, View, Component, Image} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style ={styles.navbar}>
            <Image
              source={require('../img/menu.png')}
              style={styles.menuPictures}
            />
            <Image
              source={require('../img/accident.png')}
              style={styles.bikePictures}
            />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar:{
    height: 80,
    width: 900,
    backgroundColor: '#F5C57D',
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
  bikePictures:{
    marginLeft: 20,
    marginTop: 30,
    width: 35, 
    height: 35, 
    margin: 10
  }
  }
);