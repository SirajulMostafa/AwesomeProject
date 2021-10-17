import React, {useState} from 'react';
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
  Modal,
} from 'react-native';
import OnPresseableButton from './components/OnPresseableButton';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const App = () => {
  const [name, setName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
      // setModalVisible(false);
    } else {
      setModalVisible(true);
      
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WORNING!</Text>
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.modalText}>
                Please enter more than 3 characters !
              </Text>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              //onPress={onPressHandler}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      

      <Text style={styles.text}>Please Enter Your Name :</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="green"
        autoCapitalize="none"
        // keyboardType='numeric'
        onChangeText={value => {
          setName(value);
        }}
      />

<OnPresseableButton
     onPressFunction={onPressHandler}
     title={submitted ?'clear':'submit'}
      />
  

      {submitted ? (
        <View style={styles.body}>
        
          <Text style={styles.text}>Your are register as {name}.</Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  warning_title: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  modalBody: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    minHeight: 200,
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    margin: 16,
    height: 42,
    borderColor: 'pink',
    borderWidth: 1,
  },
    text: {
      color: '#000000',
      fontSize: 30,
      margin: 5,
      textAlign: 'center',
    },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
