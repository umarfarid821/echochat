import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { db } from '../realtimedb';
import { ref, set } from 'firebase/database';

const FetchData = () => {
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');

  // func to add data to firebase
  const addData = () => {
    set(ref(db, '/posts/' + name), {
      name: name,
      quote: quote,
    });
    setName('');
    setQuote('');
  };

  return (

    <KeyboardAvoidingView style={styles.container1} behavior="padding" enabled>
       <View>
      
      <Text style={styles.title}>Add Quote </Text>
      <Text style={styles.label}>Your Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text style={styles.label}>Quote</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setQuote(text)}
        value={quote}
        multiline={true} 
      numberOfLines={4} 
      />
      <TouchableOpacity style={styles.button} onPress={addData}>
        <Text style={styles.buttonText}>Add Quote</Text>
      </TouchableOpacity>
      
    </View>
    </KeyboardAvoidingView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default FetchData;
