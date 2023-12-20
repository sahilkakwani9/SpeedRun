import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import Explore from '../Screens/Explore';
import {View} from 'react-native';

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
            paddingVertical: 10,
          },
          headerShadowVisible: false,
        }}>
        <BottomTab.Screen
          name="Home"
          component={Explore}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    // padding: 5,
                    width: 45,
                    alignContent: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: '100%',
                  }}>
                  {/* <Icon
                    name={focused ? 'home_filled' : 'home_outline'}
                    color={'white'}
                    size={25}
                  /> */}
                </View>
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}
