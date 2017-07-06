import React from 'react';
import { StyleSheet, Text, View, Component, Image} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
        <View style ={styles.container}>
          <View style ={styles.navbar}>
            <Image
              source={require('./img/menu.png')}
              style={{width: 40, height: 40, margin: 15}}
            />
            <Image
              source={require('./img/accident.png')}
              style={{width: 50, height: 50, margin: 10}}
            />
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
    top: 90,
    left: 0,
    right: 0,
    bottom: 0,
  },
  navbar:{
    paddingTop: 18,
    height: 90,
    width: 900,
    backgroundColor: '#6D2E70',
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row'
  }
});