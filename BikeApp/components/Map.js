import React from 'react';
import { 
  Alert, 
  AppRegistry, 
  Button, 
  Component, 
  Image,
  StyleSheet,
  TouchableHighlight, 
  TouchableOpacity, 
  Text, 
  TextInput, 
  View
} from 'react-native';

import MapView from 'react-native-maps';

import renderIf from './renderif';

export default class App extends React.Component {


  state = {
    switchValue: false,
  };


  _onPressButton = () => this.setState(state => ({
    switchValue: !state.switchValue,
  })) 


  render() {
    icon= this.state.switchValue ? require('../img/paper-plane.png') : require('../img/detective.png');
    inputPlaceholder=this.state.switchValue ? "Type here the location!" : "" ;
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
          style={this.state.switchValue ? {height: 40, width: 180, margin: 10, backgroundColor: 'red', position: 'absolute', bottom: 10, left: 0,} : {}}
          placeholder={inputPlaceholder}
        />
        <TouchableOpacity
          style={styles.searchPictureContainer} 
          onPress={this._onPressButton}>
            <Image
              style={styles.searchPictures}
              source={icon}
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
    ...StyleSheet.absoluteFillObject,
  },
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
  },
  textInput:{
    height: 40, 
    width: 180, 
    margin: 10,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 10,
    left: 0,
  },
});

