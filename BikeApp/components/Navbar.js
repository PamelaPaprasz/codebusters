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