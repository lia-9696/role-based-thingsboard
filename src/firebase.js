// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXi_PcCIwMZ-PL78m5Zdtc3hfw4Frj_Y8",
  authDomain: "role-based-thingsboard.firebaseapp.com",
  projectId: "role-based-thingsboard",
  storageBucket: "role-based-thingsboard.firebasestorage.app",
  messagingSenderId: "719676166428",
  appId: "1:719676166428:web:c40bd40b7585a81840aad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication
export const auth = getAuth(app);

