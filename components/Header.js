import React, {} from 'react';
import {Text, View,StyleSheet } from 'react-native';

 Header =(props)=> {
 
    return (
       <View style={styles.view}>
         <Text style={styles.text}>
           REact Native Header
         </Text>
       </View>
    
    );
  
}
const styles= StyleSheet.create({
  view:{
    width:'100%',
    height:50,
    backgroundColor:'#00f',
    justifyContent:'center',
    alignItem:'center',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    margin: 5,
    textAlign: 'center',
  },
})


export default Header;
