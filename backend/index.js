const express = require("express");
const app = express();


var admin = require("firebase-admin");

var serviceAccount = require("./conant-physics-firebase-adminsdk-jjp61-b0c37060bb.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore();



app.get('/', function(req, res) {

    return res.json({
        // data: data,
        message: "Hello there :)",
        success:true
    })
    // return db.collection('home')
});


app.post('/', function(req, res) {
    return res.json({
        message: "Welcome :>",
        success: true
    })
});

app.get('/homepageData', function (req, res) {
    db.collection('home').get().then(function(homeRef) {
        homeRef.forEach(function(teacherDoc) {
            console.log(teacherDoc.id + " =>" + teacherDoc.data());
        })
    })
    const data = db.collection('home');
    console.log(data)
    return res.json({
        success: true,
        message: data,
    })
})

app.listen(5000, ()=> console.log("ConantPhysics listening on port 5000!"));