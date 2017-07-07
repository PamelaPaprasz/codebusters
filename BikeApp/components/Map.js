import React from 'react';
import { StyleSheet, Text, TextInput, View, Component} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.map}>
      <MapView
        style={styles.map}
        region={{
          latitude: 47.49801,
          longitude: 19.03991,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <View style={{backgroundColor: '#5414D5', height: 30}}>
        </View>
      </MapView>
          {/*<TextInput
            style={{height: 10}}
            placeholder="Type here the location!"
          />*/}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    width: 800,
    height: 800
  },
});