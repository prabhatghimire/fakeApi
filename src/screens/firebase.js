// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAmQx2EBmFtHjIqs4FPR8dBEKqE7x_1Jkk',
  authDomain: 'auth-17a1c.firebaseapp.com',
  projectId: 'auth-17a1c',
  storageBucket: 'auth-17a1c.appspot.com',
  messagingSenderId: '221171945354',
  appId: '1:221171945354:web:4ef6cf1842ed3975800273',
  measurementId: 'G-M1J4QCPYVV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
