import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={styles.homescreenView}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
      onPress={() => navigation.navigate('Details',{
        itemId:86,
        otherParam:'this is other param ',
      })}
      />
    </View>
  );
}
const DetailsScreen = ({route,navigation}) => {

  const {itemId,otherParam} = route.params

  return (
    <View style={styles.detailsScreen}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Text> Itemid: {JSON.stringify(itemId)}</Text>
      <Text> otherParam: {JSON.stringify(otherParam)}</Text>
      
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
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
