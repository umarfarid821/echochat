import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { db } from '../realtimedb';
import { ref, onValue } from 'firebase/database';

const DisplayData = () => {
  const [userData, setUserData] = useState(null);

  // Function to fetch data from Firebase
  const fetchData = () => {
    const dataRef = ref(db, '/posts/');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        // Convert the data object to an array for easier rendering
        const dataArray = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        setUserData(dataArray);
      } else {
        setUserData([]);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []); // Run once on component mount

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Motivational Quotes</Text>
      {userData && userData.length > 0 ? (
        userData.map((user) => (
          <View key={user.key} style={styles.userContainer}>
            <Text style={styles.label}>Username: {user.name}</Text>
            <Text style={styles.quoteText}>Posted Quote: {user.quote}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>No quotes available</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
   borderWidth: 1,
    borderColor: 'red',
    width: '80%',
    //circle
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    fontStyle: 'italic',
    borderRadius: 10,
  },
  userContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontSize: 15,
   
    marginBottom: 8,

  },
  quoteText: {
    fontSize: 13,
    color: 'red',
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderColor: 'red',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%',
    
  },
  noDataText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DisplayData;
