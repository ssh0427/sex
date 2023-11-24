import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFKV09U5uFGtciLResjTsb0lgsxAfEUVQ",
    authDomain: "abcd-106b4.firebaseapp.com",
    projectId: "abcd-106b4",
    storageBucket: "abcd-106b4.appspot.com",
    messagingSenderId: "1066194288259",
    appId: "1:1066194288259:web:8fbd7b8074bfaa388de5b6",
    measurementId: "G-WM13BPHP81"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db}