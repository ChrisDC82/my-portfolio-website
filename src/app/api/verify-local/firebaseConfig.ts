// Import the Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB33rmKEtd8Shq3S27HJ8CHMuvur1HlxBM",
  authDomain: "pitch-rise-verification.firebaseapp.com",
  projectId: "pitch-rise-verification",
  storageBucket: "pitch-rise-verification.appspot.com",
  messagingSenderId: "34931851681",
  appId: "1:34931851681:web:888dec5784d1c3ee86cbe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
