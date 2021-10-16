
import React,{useState} from 'react';
import {

  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,

} from 'react-native';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const App = ()=>{

const [name,setName] = useState('')
const [submitted,SetSubmitted] = useState(false)
onPressHandler =()=>{
  if(name.length > 3){
    SetSubmitted(!submitted)
  }else{
    // Alert.alert(
    //   'Warning',
    //   'the name must be longer than 3 characters',
    //   [
    //       {
    //         text:'Do not show again',
    //         onPress:()=>console.warn('Do not shown Pressed !')
    //       },
    //       {
    //         text:'cancel',
    //         onPress:()=>console.warn('cancel Pressed !')
    //       },
    //       {
    //         text:'OK',
    //         onPress:()=>console.warn('Ok Pressed !')
    //       },
          
    // ],
    // {

    //   cancelable:true,
    //   onDismiss:()=>console.warn('Alert dismissed'),
    // })
    
    //THIS tOAST USED ONLY FOR ANDROID
    ToastAndroid.showWithGravity(
      'the name must be longer than 3 chanracters',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    )

  }
}

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
    {/* { submitted ? <Text style={styles.text}>
      Your  are register as  {name}.
    
    </Text>
    :null
    }
    */}

    {/* <Button 
    title={submitted ?'clear':'submit'}
    style={styles.button}
    onPress={onPressHandler}
    /> */}

    {/* <TouchableOpacity
     
     style={styles.button}
     onPress={onPressHandler}
     activeOpacity={0.5}
    >
      <Text style={styles.text}>
      {submitted ?'clear':'submit'}
      </Text>
    </TouchableOpacity>
    { submitted ? <Text style={styles.text} >Your  are register as  {name}.</Text> :null
    } */}

    <Pressable
      // OnLongPress={onPressHandler}
      onPress={onPressHandler}
    style={({pressed})=>[{backgroundColor:pressed ?'#dddddd' : '#f0f'},styles.button]}
    >
      <Text style={styles.text}>
      {submitted ?'clear':'submit'}
      </Text>
    </Pressable>

    { submitted ? <Text style={styles.text} >Your  are register as  {name}.</Text> :null
    }
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
    

  },
  button:{
    marginBottom:5,
  }
  
  
});

export default App;
