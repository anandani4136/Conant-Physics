import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyABOEf2bOI_J7asFeoHrGN8DRaKyhqcCQs",
    authDomain: "conant-physics.firebaseapp.com",
    projectId: "conant-physics",
    storageBucket: "conant-physics.appspot.com",
    messagingSenderId: "96788085276",
    appId: "1:96788085276:web:430e4d6de051e74361fdd9",
    measurementId: "G-X15M65HNRE"
});

export var url = "http://localhost:3000/";

export function regularRequest(handler, method, body, callback) {
    const http = new XMLHttpRequest();
    http.responseType = 'json';

    http.open(method, url + handler, true);

    if (body != null) {
        http.setRequestHeader('Content-Type', 'application/json');
    }

    http.onload = function() {
        callback(http.response);
    }

    http.send(JSON.stringify(body));
}


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
