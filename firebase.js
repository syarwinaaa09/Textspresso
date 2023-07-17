import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKY-F_l08E5xKUZLg91ufuWPIF-JR8Ye0",
    authDomain: "textspresso-46e38.firebaseapp.com",
    projectId: "textspresso-46e38",
    storageBucket: "textspresso-46e38.appspot.com",
    messagingSenderId: "817734518804",
    appId: "1:817734518804:web:520b61bc1e60585808bf01"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };