import React, {useContext} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../LoginScreen/index';
import {HomeScreen} from '../homeScreen/index';
import {UserContext} from '../../../App';
import {ImageViewScreen} from '../imageViewScreen/index'

// TO DO
//header title align to center
//show login error if invalid credentials
//onEndReached and onEndReachedThreshold​ (loadmore data) //api
//show email too in Home Screen
// logout options show at top of the right side of the header
//show loder until data is loaded (check flatlist emptyContainer)

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const {user} = useContext(UserContext);
  return (
    <Stack.Navigator>
      {user.uid ? (
      <>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageView" component={ImageViewScreen} />
      </>
      ) : (
        <>
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
