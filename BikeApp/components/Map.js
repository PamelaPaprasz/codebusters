import React from 'react';
import { StyleSheet, Text, View, Component} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: 47.49801,
          longitude: 19.03991,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    );
  }
}


const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
  },
});