import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../LoginScreen/index';
import {HomeScreen} from '../homeScreen/index';
import {UserContext} from '../../../App';
import {ImageViewScreen} from '../imageViewScreen/index'

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const {user} = useContext(UserContext);
  return (
    <Stack.Navigator>
      {user.uid ? (
      <>
        <Stack.Screen name="Home" component={HomeScreen} />
      </>
      ) : (
        <>
        <Stack.Screen name="ImageView" component={ImageViewScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </>
      )}
    </Stack.Navigator>
  );
};
