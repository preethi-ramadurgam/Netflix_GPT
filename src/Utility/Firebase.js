// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL3SM4T9fqlf1BJ1K6vn30PF4_A4g-1Vc",
  authDomain: "netflix-gpt-9d8d6.firebaseapp.com",
  projectId: "netflix-gpt-9d8d6",
  storageBucket: "netflix-gpt-9d8d6.firebasestorage.app",
  messagingSenderId: "331247581675",
  appId: "1:331247581675:web:2333aa54b7365181c601ae",
  measurementId: "G-7FRQVCSPKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);