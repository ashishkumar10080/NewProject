import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>  
                <View style={styles.buttonContainer}>
        
          <Button
          title="Enter Details"
          onPress={() => this.props.navigation.navigate('About')}
/>
      </View>
	  <View style={styles.buttonContainer}>
        
          <Button
          title="View details"
          onPress={() => this.props.navigation.navigate('Dashbord')}
/>
      </View>
	  </View>
    );
  }
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    }
})  