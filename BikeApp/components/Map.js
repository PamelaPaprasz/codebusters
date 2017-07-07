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
import { Constants, Location, Permissions } from 'expo';

export default class App extends React.Component {


  state = {
    switchValue: true,
  };


  _onPressButton = () => this.setState(state => ({
    switchValue: !state.switchValue,
  })) 


	state = {
		currentLoc: null
	};

	componentDidMount() {
		this._getLocationAsync();
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
			currentLoc: 'Permission to access location was denied',
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ currentLoc: JSON.stringify(location) });
	};

	posSelected;
    boolean = false;
    markers = [
        
        {latitude: 47.49811, longitude: 19.03181},
        {latitude: 47.49821, longitude: 19.03471},
        {latitude: 47.49801, longitude: 19.03361},
        {latitude: 47.49791, longitude: 19.03361},
        {latitude: 47.49831, longitude: 19.03261},
    ];


  render() {
    icon= this.state.switchValue ? require('../img/detective.png') : require('../img/paper-plane.png');
    return (
      <View style={styles.mainContainer}>
        <MapView onLongPress = {e => this.onSelect(JSON.stringify(e.nativeEvent))}
          style={styles.map}
          region={{
            latitude: 47.49801,
            longitude: 19.03991,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
		{this.markers.map(marker => (
                        <MapView.Marker 
	                        coordinate = {{
	                        latitude: marker.latitude,
	                        longitude: marker.longitude,
                        }}/>
                    ))}
		
		<MapView.Marker  
                        coordinate = {{
                        latitude: 47.49801, //this.state.locationResult.coords.latitude,
                        longitude: 19.03991, //this.state.locationResult.coords.longitude,    
						}}
                        image={require('../bikepin.png')}
                        />
        <TextInput 
          style={!this.state.switchValue ? {height: 40, width: 180, margin: 10, backgroundColor: 'red', position: 'absolute', bottom: 10, left: 0,} : {}}
          placeholder="Type here the location!"
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
  onSelect (data) {
  	this.boolean = true;
  	this.posSelected = data;
    alert(this.posSelected); //coordinates of selected point
  	alert(this.state.currentLoc) //coordinates of current location
  	this.render()
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

