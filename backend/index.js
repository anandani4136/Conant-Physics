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
    let dataArr = [];
    try {
    await db.collection('home').get().then(function(homeRef) {
        homeRef.forEach((teacherDoc) => {
            // console.log(teacherDoc.id + " =>" + teacherDoc.data());
            // dataArr.push(teacherDoc)
            console.log(teacherDoc)
            dataArr.push( {
                Name: teacherDoc.data().Name,
                Description: teacherDoc.data().Description,
                Email: teacherDoc.data().Email,
            })
        })
    })
    return res.json({
        success: true,
        data: dataArr,
    }) }
    catch(e) {
        return res.json({
            success: false,
            error: e,
        })
    }
})


app.get('/resourcesData',  async function (req, res) {
    let dataArr = [];
    try {
    await db.collection('resources').get().then(function(resRef) {
        resRef.forEach(function(resourceDoc) {
            // console.log(teacherDoc.id + " =>" + teacherDoc.data());
            // dataArr.push(teacherDoc)
            dataArr.push( {
                Name: resourceDoc.data().Name,
                Image: resourceDoc.data().Image,
                Link: resourceDoc.data().Link,
            })
        })
    })
    return res.json({
        success: true,
        data: dataArr,
    }) }
    catch(e) {
        return res.json({
            success: false,
            error: e
        })
    }
})




app.listen(5000, ()=> console.log("ConantPhysics listening on port 5000!"));