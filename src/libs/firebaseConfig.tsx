// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPzwzQ_3WttJkp2yX-ZPS9Q39koAW1Kh8",
  authDomain: "mbboykrg.firebaseapp.com",
  projectId: "mbboykrg",
  storageBucket: "mbboykrg.firebasestorage.app",
  messagingSenderId: "163762636419",
  appId: "1:163762636419:web:d6cfe5a7eea434b5d5fdb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export db and auth
export const db = getFirestore(app);
export const auth = getAuth(app);