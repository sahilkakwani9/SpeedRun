import React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {PortalProvider} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <View style={{height: Dimensions.get('window').height}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <PortalProvider>
          <StatusBar barStyle={'dark-content'} />
          <Navigation />
        </PortalProvider>

        {/* <GameEngine
        ref={ref => {
          setGameEngine(ref);
        }}
        style={styles.gameContainer}
        entities={Entities(height, width)}
        systems={systems}
        running={running}
        onEvent={(e: any) => {
          if (e.type === 'Game-Over') {
            setRunning(false);
            setTimeout(() => {
              console.log('starting game again');
              setRunning(true);
            }, 4000);
          } else if (e.type === 'score') {
            setScore(score => score + e.value);
          }
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
      {running ? (
        <Text style={styles.score}>{score}</Text>
      ) : (
        <>
          <GameOver score={score} restart={restart} />
        </>
      )} */}
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
