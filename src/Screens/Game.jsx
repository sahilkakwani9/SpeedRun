import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {GameEngine} from 'react-native-game-engine';
import Entities from '../entities/';
import systems from '../systems';

const Game = () => {
  const [running, setRunning] = useState(true);
  const [gameEngine, setGameEngine] = useState(null);
  const [score, setScore] = useState(0);
  const {height, width} = useWindowDimensions();

  const restart = () => {
    setScore(0);
    setRunning(true);
    gameEngine?.swap(Entities(height, width));
  };
  return (
    <GameEngine
      ref={ref => {
        setGameEngine(ref);
      }}
      style={styles.gameContainer}
      entities={Entities(height, width)}
      systems={systems}
      running={running}
      onEvent={e => {
        if (e.type === 'Game-Over') {
          setRunning(false);
          setTimeout(() => {
            console.log('starting game again');
            setRunning(true);
          }, 4000);
        } else if (e.type === 'score') {
          setScore(score => score + e.value);
        }
      }}
    />
  );
};

export default Game;

const styles = StyleSheet.create({
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  score: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 100,
    fontFamily: 'crackman-regular',
  },
});
