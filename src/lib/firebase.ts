import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB33rmKEtd8Shq3S27HJ8CHMuvur1HlxBM",
  authDomain: "pitch-rise-verification.firebaseapp.com",
  projectId: "pitch-rise-verification",
  storageBucket: "pitch-rise-verification.appspot.com",
  messagingSenderId: "34931851681",
  appId: "1:34931851681:web:888dec5784d1c3ee86cbe0"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
export default app;

