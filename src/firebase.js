
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnX67b__B3m0DCNqn3MsPSgIna7Go7ihg",
  authDomain: "sun-portfolio02.firebaseapp.com",
  projectId: "sun-portfolio02",
  storageBucket: "sun-portfolio02.firebasestorage.app",
  messagingSenderId: "294041325771",
  appId: "1:294041325771:web:f5f1daa398a5e885390b4e",
  measurementId: "G-EYZTM8D9MR"
};

// Initialize Firebase only once
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// Initialize Cloud Firestore
export const db = getFirestore(app);

export default app;
