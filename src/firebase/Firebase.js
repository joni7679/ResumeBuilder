
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAusA93KWmbkP6p0hmZ47cEoZeQM9c3hVU",
    authDomain: "resume-bulider-b1596.firebaseapp.com",
    projectId: "resume-bulider-b1596",
    storageBucket: "resume-bulider-b1596.firebasestorage.app",
    messagingSenderId: "423880827583",
    appId: "1:423880827583:web:fa0cedfd3880bb85219c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

