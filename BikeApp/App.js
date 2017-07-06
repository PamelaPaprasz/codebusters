import React from 'react';
import { StyleSheet, Text, View, Component} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
        <View style ={styles.container}>
          <View style ={styles.navbar}>
            <Text style ={styles.navbarText}>Most</Text>
          </View>
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
      </View>
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
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
  },
  navbar:{
    height: 80,
    width: 900,
    backgroundColor: 'pink',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  navbarText:{
    height: 80, 
    fontSize: 40, 
    color: 'black'
  }
});
