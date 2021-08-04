const express = require("express");
const app = express();


var admin = require("firebase-admin");

var serviceAccount = require("backend/conant-physics-firebase-adminsdk-jjp61-b0c37060bb.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore();


app.get('/', function(req, res) {
    return res.json({
        message: "Hello there :)",
        success:true
    })
});

app.post('/', function(req, res) {
    return res.json({
        message: "Welcome :>",
        success: true
    })
});

app.listen(3000, ()=> console.log("ConantPhysics listening on port 3000!"));