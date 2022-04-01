import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB4WJ_nspMyFA_zsSZ9ky_SoQiS2QOp70I",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:e12a9be8b686a53b9f6321",
    measurementId: "G-ZB0JQLVCN6"
};


// Get a Firestore instance
export const db = firebase
    //.initializeApp({ projectId: process.env.VUE_APP_ID })
    .initializeApp(firebaseConfig)
    .firestore();

// Export types that exists in Firestore
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };