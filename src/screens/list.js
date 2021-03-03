import React, { Component, useState } from 'react';
//import React, {  useState } from "react";
import { Button, View, Text,Picker, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default function list() {
	

  
	  const [selectedValue, setSelectedValue] = useState("java");

    return (
      <View style={styles.container}>
	  <Text style = {styles.text}>
	  <Text>
               Select Languag
            </Text>
			</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 250}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Html" value="html" />
        <Picker.Item label="Css" value="css" />
        <Picker.Item label="Bootstrap" value="bootstrap" />
        <Picker.Item label="Php" value="php" />
      </Picker>
	  <Text style = {styles.text}>
	  <Text>
               Enter Name
            </Text>
			</Text>
	  <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
			   
			   <View style={styles.buttonContainer}>
			  <Button
          title="Submit"
          onPress={() => this.props.navigation.navigate.goBack()}
/>
</View>
    </View>
	/*<View style = {styles.container}>
	<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
			   </view>*/
    )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
	margin: 15,
    paddingTop: 40,
    
  },
  input: {
      
      height: 40,
	  width: 250,
      borderColor: '#7a42f4',
      borderWidth: 1,
  },
  text: {
	  
      
      color: 'black',
  },
  buttonContainer: {
	  margin: 15,
	  width: 250,
  }
});