import React, { Component } from 'react';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Component/Home';
import Splash from './src/Component/Splash';
import Login from './src/Component/Login';
import Registration from './src/Component/Registration';
const AppNavigator = createStackNavigator ({
  Splash: { screen: Splash,
    navigationOptions: {
      header: null,
    } },
      Login: { screen: Login ,
        navigationOptions: {
          header: null,
        } },
      Home: { screen: Home },
      Registration: { screen: Registration }
    },
    {
      initialRouteName: 'Splash',
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}