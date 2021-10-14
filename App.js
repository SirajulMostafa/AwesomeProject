
import React,{useState} from 'react';
import {

  StyleSheet,
  View,
  TextInput,
  Text,

} from 'react-native';
const App = ()=>{

const [name,setName] = useState('')

return(

  <View style={styles.body}>
    <Text style={styles.text}>
      Please Enter Your Name :

    </Text>
    <TextInput 
    style={styles.input}
    placeholder="Password"
    placeholderTextColor="green"
    autoCapitalize="none"
    // keyboardType='numeric'
    onChangeText={(value)=>{setName(value)}}
    />

    <Text style={styles.text}>
      Your  Name is  {name}.

    </Text>
  </View>
) 
};
const styles = StyleSheet.create({
  abc:{
 alignItems: 'center',
 borderBottomWidth: '2',

  },
  body: {
flex:1,
    flexDirection:'column',
    // justifyContent: 'center',
    alignItems:'center',
   backgroundColor:'#ffffff',

   
  },  

  item:{
    margin:10,
    backgroundColor:'#4ae1fa',
    justifyContent: 'center',
    alignItems:'center',

  },
  input:{
    width:200,
    margin: 16,
    height: 42,
    borderColor: "pink",
    borderWidth: 1,
  },
  text:{
    color:'#000000',
    fontSize: 35,
    margin:10,
    

  }
  
  
});

export default App;
