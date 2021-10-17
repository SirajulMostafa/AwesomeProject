import React, {Component} from 'react';
import {Text, View,Pressable,StyleSheet } from 'react-native';

 OnPresseableButton =(props)=> {
 
    return (
        <Pressable
          onPress={props.onPressFunction}
          
          style={({pressed}) => [
            {backgroundColor: pressed ? '#dddddd' : '#f0f'},
            styles.button,
          ]}>
          <Text style={styles.text}>
            {/* {submitted ? 'clear' : 'submit'} */}
           {props.title}
            </Text>
        </Pressable>
    
    );
  
}
const styles= StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    margin: 5,
    textAlign: 'center',
  },
})


export default OnPresseableButton;
