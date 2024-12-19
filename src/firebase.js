// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCsjTGljfE10uqMMrp9DQM7TG4FH3-Y6M",
  authDomain: "product-page-7c32d.firebaseapp.com",
  projectId: "product-page-7c32d",
  storageBucket: "product-page-7c32d.firebasestorage.app",
  messagingSenderId: "406437430685",
  appId: "1:406437430685:web:0c8f444e49a5e37f4e5b74",
  measurementId: "G-1FXH9ZPXBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
