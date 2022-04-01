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

var produtos = [{
    "adicionado": { "segundos": 1578956400, "nanosegundos": 0 },
    "categoria": "Camas",
    "descricao": "Cama Pata de 37CM de diâmetro",
    "image": ["cama_1_n.png", "cama_1_n.png"],
    "inventario": 20,
    "preco": 1000,
    "avaliacao": 4,
    "slug": "caminha",
    "titulo": "Cama para Gatos"
}]

produtos.forEach(function(obj) {
    db.collection("produtos").add({
            adicionado: obj.adicionado,
            categoria: obj.categoria,
            descricao: obj.descricao,
            image: obj.image,
            inventario: obj.inventario,
            preco: obj.preco,
            avaliacao: obj.avaliacao,
            slug: obj.slug,
            titulo: obj.titulo
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
});