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

  const {user,setUser} = useContext(UserContext)



  const signIn = () => {
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
