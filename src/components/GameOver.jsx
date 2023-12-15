import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const widthRatio = screenWidth / 375; // You might want to adjust these values based on your design
const heightRatio = screenHeight / 667;

const App = props => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);

    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1],
  });

  const marginTop = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: [heightRatio * 0, heightRatio * 240],
  });

  return (
    <View style={styles.gameOverContainer}>
      <Animated.View style={[styles.animatedCard, {opacity, marginTop}]}>
        <Text style={styles.gameOverText}>Game Over</Text>
        <Text style={styles.gameOverText}>{props.score}</Text>
        <TouchableOpacity onPress={props.restart}>
          <View style={[styles.container, styles.shadow]}>
            <Text style={[styles.textStyle]}>Restart</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styleGuide = {
  primaryColor: '#35d8fb',
  secondaryColor: '#fca487',
  themebackground: 'white',
  bigShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    alignItems: 'center',
  },
  animatedCard: {
    width: widthRatio * 260,
    height: heightRatio * 200,
    padding: heightRatio * 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    ...styleGuide.bigShadow,
  },
  gameOverText: {
    fontSize: heightRatio * 30,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: heightRatio * 20,
    fontFamily: 'crackman-regular',
  },
  container: {
    height: heightRatio * 30,
    width: widthRatio * 100,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    backgroundColor: styleGuide.primaryColor,
  },
  shadow: {
    ...styleGuide.bigShadow,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default App;
