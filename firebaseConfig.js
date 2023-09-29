// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsGCi7VgxuovHAbY4tRDAKDRN6sxw8MHo",
  authDomain: "misinfo-5d004.firebaseapp.com",
  projectId: "misinfo-5d004",
  storageBucket: "misinfo-5d004.appspot.com",
  messagingSenderId: "2581605663",
  appId: "1:2581605663:web:5c1f1a43d80568fd5b542a",
  measurementId: "G-L4GJJGV0V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);