// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi7km6K8CsKZar2807cqlLG-okXWgP8Io",
  authDomain: "next14-cc-6170d.firebaseapp.com",
  projectId: "next14-cc-6170d",
  storageBucket: "next14-cc-6170d.firebasestorage.app",
  messagingSenderId: "101815482762",
  appId: "1:101815482762:web:f5c80220484d1e5dc2b073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);