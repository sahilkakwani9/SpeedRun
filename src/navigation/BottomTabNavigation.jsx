import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import {View} from 'react-native';
import HomeIcon from '../assets/icons/Home';
import Home from '../Screens/Home';
import GameIcon from '../assets/icons/Game';
import Game from '../Screens/Game';
import Notification from '../Screens/Notification';
import NotificationIcon from '../assets/icons/Notification';
import Profile from '../Screens/Profile';
import ProfileIcon from '../assets/icons/Profile';
import HomeFill from '../assets/icons/HomeFill';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({navigation}) {
  return (
    <>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerStyle: {backgroundColor: 'black', elevation: 2},
          headerTitle: '',
          tabBarStyle: {
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopColor: 'transparent',
            paddingHorizontal: 5,
            paddingVertical: 15,
            backgroundColor: 'rgba(0, 0, 0, 1)',
          },
          headerShadowVisible: false,
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: 'Solr',
            headerStyle: {
              backgroundColor: 'black',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 50,
              fontWeight: 'bold',
              color: 'white',

              marginTop: 10,
            },
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => (
              <HomeIcon height={40} width={40} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Game"
          component={Game}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <GameIcon height={80} width={80} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <NotificationIcon height={80} width={80} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <ProfileIcon height={80} width={80} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}
