import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBfSFjWHGE0NhxVWcq-Ei18SYO-uRLixWM",
    authDomain: "ioanna-curso-react.firebaseapp.com",
    projectId: "ioanna-curso-react",
    storageBucket: "ioanna-curso-react.appspot.com",
    messagingSenderId: "443362565383",
    appId: "1:443362565383:web:dfc860cc9c22c647fb39a2"
  };


const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();