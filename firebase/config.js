// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp1a0tXE19HBUkZWWGx1Q7EqjJN4YqOJk",
  authDomain: "onecoffeefirst-5da09.firebaseapp.com",
  projectId: "onecoffeefirst-5da09",
  storageBucket: "onecoffeefirst-5da09.appspot.com",
  messagingSenderId: "1081667848951",
  appId: "1:1081667848951:web:110f70b837a0c1d99c21f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getfirestore(app);
