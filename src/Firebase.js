// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV4UG7fhjBcQ7_CTSxXzANke50N6nxMJc",
  authDomain: "devcanvas-1bb5d.firebaseapp.com",
  projectId: "devcanvas-1bb5d",
  storageBucket: "devcanvas-1bb5d.appspot.com",
  messagingSenderId: "595676516817",
  appId: "1:595676516817:web:cc9f80bf0aac9a2d7950f0",
  measurementId: "G-RTY25CPKX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);