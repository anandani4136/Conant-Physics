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

app.get('/homepageData',  async function (req, res) {
    let dataArr = [0, 1, 2];
    await db.collection('home').get().then(function(homeRef) {
        homeRef.forEach(function(teacherDoc) {
            // console.log(teacherDoc.id + " =>" + teacherDoc.data());
            dataArr.push(teacherDoc)
        })
    })
    const data = db.collection('home');
    console.log(data)
    return res.json({
        success: true,
        message: data,
        data: dataArr,
    })
})

app.listen(5000, ()=> console.log("ConantPhysics listening on port 5000!"));