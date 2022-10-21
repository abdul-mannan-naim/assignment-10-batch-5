// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYdJmt0WO-kfeK_A-7xMx0tmwnk8Mz0Ug",
  authDomain: "signout-signin-auth.firebaseapp.com",
  projectId: "signout-signin-auth",
  storageBucket: "signout-signin-auth.appspot.com",
  messagingSenderId: "243259562763",
  appId: "1:243259562763:web:fdb3b0905a6631cbc7200e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth;