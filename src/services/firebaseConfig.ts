import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAoE9l22Ib2eEWvNySktTUf3p8-UusFMnM",
  authDomain: "sked-5a76b.firebaseapp.com",
  projectId: "sked-5a76b",
  storageBucket: "sked-5a76b.firebasestorage.app",
  messagingSenderId: "5689205656",
  appId: "1:5689205656:web:fda8ad6b239b8b670401ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebase_auth = getAuth(app)