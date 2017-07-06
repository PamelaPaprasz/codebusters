import React from 'react';
import { StyleSheet, Text, View, Component} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: 47.49801,
            longitude: 19.03991,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
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
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});