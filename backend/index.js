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

app.get('/homepageData', async function (req, res) {
    const homeRef = db.collection('home');

    const data = await homeRef.get();
    console.log(data)
    return res.json({
        success: true,
        message: data,
    })
})

app.listen(5000, ()=> console.log("ConantPhysics listening on port 5000!"));