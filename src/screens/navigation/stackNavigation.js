import React, {useContext} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../LoginScreen/index';
import {HomeScreen} from '../homeScreen/index';
import {UserContext} from '../../../App';
import {ImageViewScreen} from '../imageViewScreen/index';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

// TO DO
// Redux and redux-saga

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const {user, setUser} = useContext(UserContext);

  const LogoutButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            setUser({});
          }}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Stack.Navigator>
      {user.uid ? (
        <>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Posts',
            headerRight: () => <LogoutButton/>,
          }}
        />
        <Stack.Screen
          name="ImageView"
          component={ImageViewScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Images',
            headerRight: () => <LogoutButton/>,
          }}
        />
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
