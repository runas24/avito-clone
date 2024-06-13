// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdjY04PWs_Uo56ULNHuCiwAhUcutqbslE",
  authDomain: "avito-5f982.firebaseapp.com",
  projectId: "avito-5f982",
  storageBucket: "avito-5f982.appspot.com",
  messagingSenderId: "760723165760",
  appId: "1:760723165760:web:1a59af8a337950d1e9c5a5",
  measurementId: "G-NNB7S9CQ5W"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };