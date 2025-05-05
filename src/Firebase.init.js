// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnbvLZPk-fdbMLx89yy4sLwsvoQ8Q-Glg",
  authDomain: "explore-email-password-a-af6bf.firebaseapp.com",
  projectId: "explore-email-password-a-af6bf",
  storageBucket: "explore-email-password-a-af6bf.firebasestorage.app",
  messagingSenderId: "920050855811",
  appId: "1:920050855811:web:2103066ceb25a4002e10b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);