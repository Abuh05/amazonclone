import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANGaMl-aPV0yxiG5AtiCQDGeivFci-qKI",
    authDomain: "clone-49180.firebaseapp.com",
    databaseURL: "https://clone-49180.firebaseio.com",
    projectId: "clone-49180",
    storageBucket: "clone-49180.appspot.com",
    messagingSenderId: "519958847617",
    appId: "1:519958847617:web:a8bc836ac2577a236fad80",
    measurementId: "G-3N6S8B0BBR"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };