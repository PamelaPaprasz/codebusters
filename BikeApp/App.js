import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Map from './components/Map';
import Login from './components/Login';

export default class App extends React.Component {
  render() {
    return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" initial={true}/>
        <Scene key="bikeApp" component={Map} />
      </Scene>
    </Router>
  )}
}
