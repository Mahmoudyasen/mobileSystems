import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ColorScreen from "./src/screens/ColorScreen";

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ColorScreen" component={ColorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
