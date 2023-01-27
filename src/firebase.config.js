// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE8CrY5llnPU3sMnpIUOQo5tMtQUnX1_Q",
  authDomain: "multimart-9b5a9.firebaseapp.com",
  projectId: "multimart-9b5a9",
  storageBucket: "multimart-9b5a9.appspot.com",
  messagingSenderId: "251154030106",
  appId: "1:251154030106:web:1ab2b0ef5c46dd606e3ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;