import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB7lCxp_4Id2MMQwipRx2zxalkWslRufpo",
  authDomain: "toko-buku-akasia.firebaseapp.com",
  databaseURL: "https://toko-buku-akasia-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "toko-buku-akasia",
  storageBucket: "toko-buku-akasia.appspot.com",
  messagingSenderId: "817172120623",
  appId: "1:817172120623:web:7cab225cfacddaa41d72da",
  measurementId: "G-2JGLHJF3JE"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
