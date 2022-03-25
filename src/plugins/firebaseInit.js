// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAwXCS1bDiB6ASW6eIb5bZ7Jea-ccYjyy0",
    authDomain: "form-49cbb.firebaseapp.com",
    projectId: "form-49cbb",
    storageBucket: "form-49cbb.appspot.com",
    messagingSenderId: "216189213193",
    appId: "1:216189213193:web:7d7d081a98e8b69da676d8",
    measurementId: "G-E9RW73J7PB"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export {db,auth};