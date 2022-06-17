import React, { useState, useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SigninScreen from "./src/screens/SigninScreen";

import SignupScreen from "./src/screens/SignupScreen";

import authContext from "./src/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/screens/Home";
import Health from "./src/screens/Health";
import Business from "./src/screens/Business";
import Sports from "./src/screens/Sports";
import Tech from "./src/screens/Tech";
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function mainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#e44f50",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Health"
        component={Health}
        options={{
          tabBarActiveTintColor: "#e44f50",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medkit" color={color} size={30} />
          ),
        }}
      />
       <Tab.Screen
        name="Tech"
        component={Tech}
        options={{
          tabBarActiveTintColor: "#e44f50",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={Business}
        options={{
          tabBarActiveTintColor: "#e44f50",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarActiveTintColor: "#e44f50",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football" color={color} size={30} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}

function App() {
  const [authenticated, setAuthenticated] = useState({});

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
      {console.log(authenticated)}
      <NavigationContainer>
        <Stack.Navigator>
          {Object.keys(authenticated).length <= 0 ? (
            <>
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="Signin"
                component={SigninScreen}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <Stack.Screen
              name="mainFlow"
              component={mainFlow}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </authContext.Provider>
  );
}

export default App;
