import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
