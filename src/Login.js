import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Dashboard');
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container1} behavior="padding" enabled>
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>


      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => loginUser(email, password)}>
        <Text style={{ color: '#64ED9E', fontWeight: 'bold', fontSize: 26 , fontStyle: 'italic',}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registeration')}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10 }}>Don't have an account? </Text>
        <Text style={{ color: '#ABED64', fontWeight: 'bold', fontSize: 16 }}>Register here</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
    backgroundColor: 'lightgreen',
    width: 310,
    
    
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  input: {
    backgroundColor: 'green',
    width: 250,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 100,
  },
  button: {
    backgroundColor: 'green',
    width: 150,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
   
    
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    width: 250, 
    height: 40,
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
    fontStyle: 'italic',
    borderRadius: 10,
    color: '#64ED9E',
  },
});
