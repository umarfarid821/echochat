import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardScreen from './DashboardScreen';
import Chat from './Chat';
import Profile from '../components/Profile';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'EchoScreen') {
            iconName = 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = 'logo-ionic';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF7F7F',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
      name="EchoScreen"
        component={DashboardScreen}
        options={{
          headerTitle: () => <Header name="Welcome To Echo App" />,
          headerStyle: {
            height: 80,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 50,
            backgroundColor: "#FF7F7F",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerTitle: () => <Header name="Chat" />,
          headerStyle: {
            height: 80,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 50,
            
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => <Header name="Profile" />,
          headerStyle: {
            height: 80,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 50,
            backgroundColor: "#FF7F7F",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
