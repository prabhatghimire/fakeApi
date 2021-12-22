import React from 'react'
import { Text, View } from 'react-native'

export const Validate = ({email, password}) => {
        const emailRegex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email !== null && emailRegex.test(email)) {
          return true;
        } else if (password !== null && password >= 8) {
          return true;
        }
        setError(true);
        setErrorCode('Invalid email/password');
        setinErrorMessage('Please enter valid email and password');
        return false;
}