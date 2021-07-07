// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMzVF6NZvB2MpiMXG2PazGhP1Dnl-eReI",
    authDomain: "cf-watch.firebaseapp.com",
    projectId: "cf-watch",
    storageBucket: "cf-watch.appspot.com",
    messagingSenderId: "1086127621513",
    appId: "1:1086127621513:web:bfa5a6baecfc0689030d58",
    measurementId: "G-T2P5JRWSG8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('localhost', '9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', '8080');
}

export { auth, db };