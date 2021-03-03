import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import home from './src/screens/home';  
import list from './src/screens/list';  
import dashboard from './src/screens/dashboard';  
  
export default class App extends React.Component {
  render() {
    return <AppContainer />;
	//return <AppContainer1 />
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: home
  },
  About: {
    screen: list
  },
  Dashbord: {
	  screen: dashboard
  }
});
/*const AppNavigator1 = createStackNavigator({
  Home: {
    screen: home
  },
  
  Dash: {
	  screen: dashboard
  }
});*/

const AppContainer = createAppContainer(AppNavigator);
//const AppContainer1 = createAppContainer(AppNavigator1);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});