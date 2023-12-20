import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import StackNavigation from './StackNavigation';

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
