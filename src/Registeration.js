import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // You can navigate to the dashboard or any other screen after successful registration
      navigation.navigate('Dashboard');
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Text style={styles.title}>Registration</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={registerUser}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    borderRadius: 70,
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    backgroundColor: 'lightblue',
    width: 310,
    
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    width: 250, 
    height: 40,
    textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',
    fontStyle: 'italic',
    borderRadius: 10,
  },
  form: {
    marginTop: 40,
  },
  input: {
    backgroundColor: 'skyblue',
    width: 250,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 100,
  },
  button: {
    backgroundColor: '#026efd',
    width: 250,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Registration;
