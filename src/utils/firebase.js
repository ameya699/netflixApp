// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTPNC3Es0I-0vuK0W_8OcEb9iWkYSH9zI",
  authDomain: "netflixapp-2b581.firebaseapp.com",
  projectId: "netflixapp-2b581",
  storageBucket: "netflixapp-2b581.appspot.com",
  messagingSenderId: "1053876666587",
  appId: "1:1053876666587:web:0b01175a61cc1820258cfe",
  measurementId: "G-XF3KLS76ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()