import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29ARRCow2ezqvuWKmSi3XHUbmJyCFvqo",
  authDomain: "react-coder-4a37f.firebaseapp.com",
  projectId: "react-coder-4a37f",
  storageBucket: "react-coder-4a37f.appspot.com",
  messagingSenderId: "538990000345",
  appId: "1:538990000345:web:520196cdafb3a35f8266c8",
  measurementId: "G-TWQG8VJX2X",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
