import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from './config';

import Login from "./src/Login";
import Registeration from "./src/Registeration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";

const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerTitle: () => <Header name="Login" />,
                headerStyle: {
                  height: 80,
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 50,
                  backgroundColor: "green",
                  shadowColor: "#000",
                  elevation: 25,
                 
                  
                },
              }}
            />
            <Stack.Screen
              name="Registeration"
              component={Registeration}
              options={{
                headerTitle: () => <Header name="Registration" />,
                headerStyle: {
                  height: 80,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  backgroundColor: "#00e4d0",
                  shadowColor: "#000",
                  elevation: 25,
                },
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerTitle: () => <Header name="EchoChat Reminder" />,
              headerStyle: {
                height: 120,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: "#a52a2a",
                shadowColor: "#000",
                elevation: 25,
              },
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
