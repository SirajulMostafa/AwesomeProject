import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Profile =()=>{
  return(
    <View>
      <Text>THis is profile screen </Text>
    </View>
  )
}
const Settings =()=>{
  return(
    <View>
      <Text>This is Settings screen </Text>
    </View>
  )
}

const Feed =()=>{
  return(
    <View>
      <Text>This is Feed screen </Text>
    </View>
  )
}
const Messages =()=>{
  return(
    <View>
      <Text>This is Messages  screen </Text>
    </View>
  )
}


function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  homescreenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
