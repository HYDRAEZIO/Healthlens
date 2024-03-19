import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC4MR6O6fVUZ-8lt7WHgRd62fISBLBQGgA",
  authDomain: "healthlens-b71c0.firebaseapp.com",
  projectId: "healthlens-b71c0",
  storageBucket: "healthlens-b71c0.appspot.com",
  messagingSenderId: "30149701575",
  appId: "1:30149701575:web:01356381fd77cbd74073e2",
  measurementId: "G-120FBRYLXK",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {firebaseApp, auth,db}