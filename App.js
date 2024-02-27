import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from './Registro';
import Login from './Login.js'; 
import Main from './main.js';
import Historial from './historial.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name='Historial' component={Historial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
