// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCezgDOBCEKDNlpO8g93QQUQETQhtZSd9k",
  authDomain: "ud-blog-8542f.firebaseapp.com",
  projectId: "ud-blog-8542f",
  storageBucket: "ud-blog-8542f.appspot.com",
  messagingSenderId: "646191293069",
  appId: "1:646191293069:web:4ed53654c69bbfad6a78c4",
  measurementId: "G-0Y5ND7P3X7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export const storage = getStorage();

export const db = getFirestore(app);
