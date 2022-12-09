import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIFhjWCAfXXTh3ge18KfVW3yLuM9tZ2Mo",
  authDomain: "cart-f6188.firebaseapp.com",
  projectId: "cart-f6188",
  storageBucket: "cart-f6188.appspot.com",
  messagingSenderId: "565980061311",
  appId: "1:565980061311:web:c02170c46c0bcd3c04294a"
};

// Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);
const db=app.firestore()
const auth = app.auth();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <App />
    </div>
);
export {auth};
export default{db} ;



