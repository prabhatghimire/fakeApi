import React, {useState, useContext} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {UserContext} from '../../../App';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../firebase';
import {styles} from './style';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inValidEmail, setInValidEmail] = useState(null);
  const [inValidPassword, setinValidPassword] = useState(null);

  const { setUser} = useContext(UserContext);

  const vlaidate = () => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (email !== null && emailRegex.test(email)) {
      setInValidEmail(false);
    } else if (password !== null && password.length > 8) {
      setInValidEmail(false);
    } else {
      setInValidEmail(true);
      setInValidEmail(true);
    }
  };

  const signIn = () => {
    // if ( !inValidEmail && !inValidPassword) {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // const user = userCredential.user;
        setUser(userCredential.user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    // }
    // else {

    // }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.Textinput}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.Textinput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.Button} onPress={() => signIn()}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => signUp()}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
