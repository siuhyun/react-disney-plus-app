// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvUmIg9W-Tl7BP4IrxOQYSZ0g1Nu4CBHU",
  authDomain: "react-disney-plus-app-fd2dc.firebaseapp.com",
  projectId: "react-disney-plus-app-fd2dc",
  storageBucket: "react-disney-plus-app-fd2dc.appspot.com",
  messagingSenderId: "507863699796",
  appId: "1:507863699796:web:85addd361b497e1115f8c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;