const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB4WJ_nspMyFA_zsSZ9ky_SoQiS2QOp70I",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:e12a9be8b686a53b9f6321",
    measurementId: "G-ZB0JQLVCN6"
});

var db = firebase.firestore();

var blogposts = [{
    "autor": "Diego Pereira",
    "categoria": "Unha de Gato",
    "content": "Tudo que fazemos, fazemos com amor",
    "image": "cat-2571971_1920.jpg",
    "postado": { "segundos": 1577878200, "nanosegundos": 0 },
    "slug": "comemorar-dia-gato",
    "titulo": "Comemore o dia do gato!",

}]

blogposts.forEach(function(obj) {
    db.collection("blogposts").add({
            autor: obj.autor,
            categoria: obj.categoria,
            content: obj.content,
            image: obj.image,
            postado: obj.postado,
            slug: obj.slug,
            titulo: obj.titulo
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
});