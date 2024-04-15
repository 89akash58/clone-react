
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjUHKN4e6EWFoP2hzHF10m22D5LPer-iA",
  authDomain: "react-netflix-clone-6ebac.firebaseapp.com",
  projectId: "react-netflix-clone-6ebac",
  storageBucket: "react-netflix-clone-6ebac.appspot.com",
  messagingSenderId: "128686114816",
  appId: "1:128686114816:web:3e94e8d30e7a754870f0e5",
  measurementId: "G-5ST26KNLDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);