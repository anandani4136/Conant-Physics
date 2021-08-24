const url = "http://localhost:3000";

firebase.initializeApp({
    apiKey: "AIzaSyABOEf2bOI_J7asFeoHrGN8DRaKyhqcCQs",
    authDomain: "conant-physics.firebaseapp.com",
    projectId: "conant-physics",
    storageBucket: "conant-physics.appspot.com",
    messagingSenderId: "96788085276",
    appId: "1:96788085276:web:430e4d6de051e74361fdd9",
    measurementId: "G-X15M65HNRE"
});


export default function backendReq(method, urlExt, body, callback) {
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

    return http.responseText;
}