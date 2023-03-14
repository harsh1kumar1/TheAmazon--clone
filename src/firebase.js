// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBt2NN83vcf9ns9JV5uwEGZb7T96xS1Aq0",
  authDomain: "clone-cf92e.firebaseapp.com",
  projectId: "clone-cf92e",
  storageBucket: "clone-cf92e.appspot.com",
  messagingSenderId: "754110165837",
  appId: "1:754110165837:web:4fecf1e680457642ad3d04",
  measurementId: "G-3RF807GD01"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
