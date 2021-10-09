
import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
  Text,
  useColorScheme,
  Linking,
  Button,
} from 'react-native';
const App = ()=>{
const [Items,setItems] = useState([
  {name: 'Item 1'},
  {name: 'Item 2'},
  {name: 'Item 3'},
  {name: 'Item 4'},
  {name: 'Item 5'},
  {name: 'Item 6'},
  {name: 'Item 7'},
  {name: 'Item 8'},
  
]);
const [Refreshing,setRefreshing] = useState(false)
const onRefresh=()=>{
  setRefreshing(true)
  setItems([...Items,{key: '69',name:'Items add 69'}]);
  setRefreshing(false); 
  
}



return(

  <FlatList
  // numColumns={2}
  // horizontal
  keyExtractor={(item,index)=>index.toString()}
  data={Items}
  renderItem={({item})=>(
    <View style={styles.item} >
        <Text style={styles.text}>{item.name}</Text>
    </View>
  )}

  refreshControl={
    <RefreshControl refreshing={Refreshing}
    onRefresh={onRefresh}
    color = {['#ff00ff']}
    />
  }
  />

/*
<ScrollView style={styles.body} 
refreshControl={
<RefreshControl refreshing={Refreshing}
onRefresh={onRefresh}
color = {['#ff00ff']}
/>
}>
  {
    Items.map((object)=>{
      return(
<View style={styles.item} key={object.key}>
  <Text style={styles.text}>{object.item}</Text>
</View>
      )
    })
  }
<View>
  <Text>
    <Button title='hello title'></Button>
  </Text>
</View>
</ScrollView>
*/

  );
  
};
const styles = StyleSheet.create({
  body: {
flex:1,
    flexDirection:'column',
    // justifyContent: 'center',
    //alignItems:'stretch',
   backgroundColor:'#ffffff',
   
  },  

  item:{
    margin:10,
    backgroundColor:'#4ae1fa',
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    color:'#000000',
    fontSize: 35,
    margin:10,
    

  }
  
  
});

export default App;
