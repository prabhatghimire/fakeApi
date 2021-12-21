import React, {useState, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/screens/navigation/stackNavigation';
// import {UserContext, user, defaultUserValue} from './src/context/user-context';
import {auth, onAuthStateChanged} from './src/screens/firebase';

export const UserContext = createContext(null);
export default function App() {
  const [user, setUser] = React.useState({});


  onAuthStateChanged(auth, user => {
    if (user) {
      return user.uid;
    } else {
      return null;
    }
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </UserContext.Provider>
  );
}
