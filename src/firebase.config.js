// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM9DWYw9-ICNVMqjTHsn9Wa_br6AQNXsw",
  authDomain: "ekart-16f4b.firebaseapp.com",
  projectId: "ekart-16f4b",
  storageBucket: "ekart-16f4b.appspot.com",
  messagingSenderId: "366053335166",
  appId: "1:366053335166:web:eb01bef6fd5e03b98c782f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage =getStorage(app);


export default app;