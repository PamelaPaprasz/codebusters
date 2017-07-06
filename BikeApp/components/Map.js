import React from 'react';
import { Alert, AppRegistry, Button, Component, Image ,StyleSheet, TouchableOpacity, Text, TextInput, View} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {

  __onPressButton() {
    Alert.alert('You pressed me!')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: 47.49801,
            longitude: 19.03991,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <TextInput 
          style={styles.textInput}
          placeholder="Type here the location!"
        />
        <TouchableOpacity style={styles.searchPictureContainer}>
          <Image
            onPress={this._onPressButton}
            style={styles.searchPictures}
            source={require('../img/detective.png')}
          />
        </TouchableOpacity>
        </MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer:{
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    // alignItems: 'flex-end',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // height: '100%',
    // width:'100%',
    // bottom: 0, 
    ...StyleSheet.absoluteFillObject,
  },
  // searchContainer:{
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // height: 60,
    // width: '100%',
    // left: 10,
    // right: 10,
    // bottom: 0,
    // top: 600
  // },
  searchPictureContainer:{
    maxWidth: 55, 
    maxHeight: 55, 
    minWidth: 55, 
    minHeight: 55,
    margin: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  searchPictures:{
    maxWidth: 50, 
    maxHeight: 50, 
    minWidth: 50, 
    minHeight: 50,
    // marginTop: '110%',
    // position: 'absolute',
    // right: 10,
    // bottom: 70,
    // top: 350,
  },
  textInput:{
    height: 40, 
    width: 180, 
    margin: 10,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 10,
    left: 0,
  }
});