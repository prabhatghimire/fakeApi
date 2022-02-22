import React, {useState, useContext} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {UserContext} from '../../../App';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../firebase';
import {styles} from './style';
// import { Validate } from '../../components/formValidation';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const [errorCode, setErrorCode] = useState(null);
  const [errorMessage, setinErrorMessage] = useState(null);

  // const [isEmailValid, setIsEmailValid] = useState(null);
  // const [isPasswordValid, setIsPasswordValid] = useState(null);

  const {setUser} = useContext(UserContext);

  const Validate = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email !== '' && emailRegex.test(email)) {
      return true;
    } else if (password !== '' && password >= 8) {
      return true;
    }
    else if (email == '') {
      setError(true);
      setErrorCode('Invalid email/password');
      setinErrorMessage('email can not be null');
      return false;
    } else if (password == '') {
      setError(true);
      setErrorCode('Invalid email/password');
      setinErrorMessage('password can not be null');
      return false;
    }
    setError(true);
    setErrorCode('Invalid email/password');
    setinErrorMessage('Please enter valid email and password, password must 8 character long');
    return false;
  };

  const signIn = () => {
    if (Validate()) {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          setUser(userCredential.user);
        })
        .catch(error => {
          setError(true);
          setErrorCode(error.code);
          setinErrorMessage(error.message);
        });
    }
    // else {
    //   setError(true);
    //   setErrorCode('Invalid email/password');
    //   setinErrorMessage('Please enter valid email and password');
    // }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => {
        setError(true);
        setErrorCode(error.code);
        setinErrorMessage(error.message);
      });
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        onFocus={() => setError(false)}
        style={styles.Textinput}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        onFocus={() => setError(false)}
        style={styles.Textinput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? (
        <Text style={{color: 'red'}}>
          {errorCode} : {errorMessage}
        </Text>
      ) : (
        <></>
      )}
      <TouchableOpacity style={styles.Button} onPress={() => signIn()}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => signUp()}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
