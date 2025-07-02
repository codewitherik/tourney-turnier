// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4lE7AatRUXt0tSKsNRrXn1N94c4gn60s",
  authDomain: "tourney-turnieplaner.firebaseapp.com",
  projectId: "tourney-turnieplaner",
  storageBucket: "tourney-turnieplaner.firebasestorage.app",
  messagingSenderId: "543729051769",
  appId: "1:543729051769:web:96c8d752e98e2b1640cca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Erfolgreich eingeloggt: " + userCredential.user.email);
        // Weiterleiten z. B.: window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("Fehler: " + error.message);
      });
  }