// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdC5LzfYfw5nBLWVyDTLYXLw8KcMXRk5Y",
  authDomain: "kicks-42a13.firebaseapp.com",
  projectId: "kicks-42a13",
  storageBucket: "kicks-42a13.firebasestorage.app",
  messagingSenderId: "853709925850",
  appId: "1:853709925850:web:996351c30a7b4c8377e4e3",
  measurementId: "G-5YPNLHJ9YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
