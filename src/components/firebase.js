// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzSuz3WFo3oyZnGJgtsJw5fQupbaFv9q4",
  authDomain: "linkedin-clone-bf714.firebaseapp.com",
  projectId: "linkedin-clone-bf714",
  storageBucket: "linkedin-clone-bf714.appspot.com",
  messagingSenderId: "680373909638",
  appId: "1:680373909638:web:3db6c19d02841ad5eff907",
  measurementId: "G-T8YDYT2LS2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { db ,auth };