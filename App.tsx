import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Entities from './src/entities';
import {GameEngine} from 'react-native-game-engine';
import systems from './src/systems';
import GameOver from './src/components/GameOver';

const App = () => {
  const [running, setRunning] = useState(true);
  const [gameEngine, setGameEngine] = useState<GameEngine | null>(null);
  const [score, setScore] = useState<number>(0);
  const {height, width} = useWindowDimensions();

  const restart = () => {
    setScore(0);
    setRunning(true);
    gameEngine?.swap(Entities(height, width));
  };

  return (
    <View style={styles.container}>
      <GameEngine
        ref={ref => {
          setGameEngine(ref);
        }}
        style={styles.gameContainer}
        entities={Entities(height, width)}
        systems={systems}
        running={running}
        onEvent={(e: any) => {
          if (e.type === 'gameOver') {
            setRunning(false);
          } else if (e.type === 'score') {
            setScore(score => score + 1);
          }
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
      {running ? (
        <Text style={styles.score}>{score}</Text>
      ) : (
        <GameOver score={score} restart={restart} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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

export default App;
