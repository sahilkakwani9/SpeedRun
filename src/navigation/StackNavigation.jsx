import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Game from '../Screens/Game';
import BottomTabNavigator from './BottomTabNavigation';
import Login from '../Screens/Login';
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
      }}
      initialRouteName={'Login'}>
      <Stack.Screen
        name="Game"
        component={Game}
        options={{
          animation: 'default',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          animation: 'default',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animation: 'default',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
