// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp, collection, addDoc, updateDoc } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWE0DZJqVLqLZNM9KZBZ4mRTijfkuBL_I",
  authDomain: "financialassistance-44d7b.firebaseapp.com",
  databaseURL: "https://financialassistance-44d7b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "financialassistance-44d7b",
  storageBucket: "financialassistance-44d7b.firebasestorage.app",
  messagingSenderId: "386357932225",
  appId: "1:386357932225:web:650b3602990e8d43f06440",
  measurementId: "G-1LGRPRC3LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc, serverTimestamp, collection, addDoc, updateDoc, onAuthStateChanged };