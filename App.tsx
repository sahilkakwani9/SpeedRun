import React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import Navigation from './src/navigation';
import {PortalProvider} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <View style={{height: Dimensions.get('window').height}}>
      <GestureHandlerRootView style={styles.container}>
        <PortalProvider>
          <StatusBar barStyle={'dark-content'} />
          <Navigation />
        </PortalProvider>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
