// StartScreen.js
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Arrow from '../assets/icons/arrow';
import Sheet from '../components/BottomSheet';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import FetchAllUsers from '../utils/Auth/FetchAllUsers';
import CreateUser from '../utils/Auth/CreateUser';
import {useConfigStore} from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const LoginRef = useRef();
  const {users, setAllUsers} = useConfigStore();
  const onStartPress = () => {
    LoginRef?.current?.snapToIndex(0);
    // navigation.navigate('Game');
  };
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  };

  const handleInputChange = text => {
    setEmail(text);
    validateEmail();
  };

  const fetchUsers = async () => {
    const isUser = await checkLocalStorage();
    if (isUser) {
      navigation.navigate('Root');
      return;
    }
    const allUsers = await FetchAllUsers();
    setAllUsers(allUsers.data);
  };

  const checkLocalStorage = async () => {
    const isUser = await AsyncStorage.getItem('@user_data');
    return isUser;
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async () => {
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      const userData = JSON.stringify(existingUser);
      await AsyncStorage.setItem('@user_data', userData);
      navigation.navigate('Root');
      LoginRef.current.close();
      return;
    }
    const userData = await CreateUser(email);
    await AsyncStorage.setItem('@user_data', userData);
    LoginRef.current.close();
    navigation.navigate('Root');
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Solr</Text>
          <Image
            source={require('../assets/Ellipse.png')}
            style={styles.titleImage}
          />
        </View>

        <TouchableOpacity onPress={onStartPress} style={styles.startButton}>
          <Arrow height={30} width={30} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/console.png')}
        style={styles.consoleImage}
      />
      <Sheet ref={LoginRef} enablePanDownToClose={true} snapPoints={['26%']}>
        <View style={styles.sheetContainer}>
          <BottomSheetTextInput
            style={[styles.input]}
            placeholder="Enter your email"
            value={email}
            onChangeText={handleInputChange}
            // onBlur={handleBlur}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Sheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050510', // You can customize the background color
  },
  rocketImage: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  upperContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 140,
    flex: 1,
  },
  titleContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 60,
    fontWeight: '800',
    color: '#fff', // Text color
  },
  titleImage: {
    height: 50,
    width: 50,
    marginTop: 12,
    zIndex: -1,
    marginLeft: -10,
  },
  startButton: {
    backgroundColor: '#2ecc71', // Button color
    padding: 16,
    marginTop: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 18,
  },
  consoleImage: {
    position: 'absolute',
    bottom: 0,
  },
  sheetContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  sheetText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    // height: 60,
    borderColor: '#2ecc71',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderBottomWidth: 6,
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
