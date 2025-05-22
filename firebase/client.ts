// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEzmIR4pJcKtzhEkpvXsOqa3Z8I6Zz5lE",
  authDomain: "prepwise-6c3d4.firebaseapp.com",
  projectId: "prepwise-6c3d4",
  storageBucket: "prepwise-6c3d4.firebasestorage.app",
  messagingSenderId: "697559800847",
  appId: "1:697559800847:web:00a338fc62c6df02cb577a",
  measurementId: "G-QTMQZDQ141"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);