import React from 'react';


import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';
import DisplayData from '../components/DisplayFormData';
const DashboardScreen = () => {
  const navigation = useNavigation();

  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <DisplayData/>
      
    </View>
  );
};

export default DashboardScreen;
