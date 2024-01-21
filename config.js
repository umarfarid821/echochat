// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrnXQXWQP2wPnY8hZnOMcYmfEykAwPQpM",
  authDomain: "echochat-a9a26.firebaseapp.com",
  databaseURL: "https://echochat-a9a26-default-rtdb.firebaseio.com",
  projectId: "echochat-a9a26",
  storageBucket: "echochat-a9a26.appspot.com",
  messagingSenderId: "218740889602",
  appId: "1:218740889602:web:58e732c3550c1d7aca2f1b",
  measurementId: "G-FGXG6EQJWN"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };