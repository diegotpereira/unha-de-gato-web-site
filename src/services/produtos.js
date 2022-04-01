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
    "categoria": "Transportburar",
    "descricao": "Res med stil i lyxig transportbur från Moderna Luxurious! Snygg, trendig och praktisk transportväska för katt eller liten hund. Solid och enkel montering, tillverkad i premium kvalitetsplast som håller länge. Det mjuka handtaget på burens ovansida ger ett bra och ergonimiskt grepp. Mått: L 49,4 x B 32,2 x H 30,4 cm.",
    "image": ["moderna-luxurious-trendy-transportbur.jpg", "moderna-luxurious-trendy-transportbur.png"],
    "inventario": 20,
    "avaliacao": 4,
    "slug": "luxurious-trendy-transportbur",
    "titulo": "Luxurious Trendy Transportbur"
}]

produtos.forEach(function(obj) {
    db.collection("produtos").add({
            adicionado: obj.adicionado,
            categoria: obj.categoria,
            descricao: obj.descricao,
            image: obj.image,
            inventario: obj.inventario,
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