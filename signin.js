
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
  import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCU1pVx54SupelrlkqxftAtm0F2zJfCaFA",
    authDomain: "website-authentication-4cbd4.firebaseapp.com",
    projectId: "website-authentication-4cbd4",
    storageBucket: "website-authentication-4cbd4.appspot.com",
    messagingSenderId: "1023124869905",
    appId: "1:1023124869905:web:0d85107ded2a0e5808f2b0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const signUp=document.getElementById('submitSignUp');
signUp.addEventListener('click', (event)=>{
  event.preventDefault();
  const email=document.getElementById('rEmail').value;
  const password=document.getElementById('rPassword').value;
  const firstName=document.getElementById('fName').value;
  const lastName=document.getElementById('lName').value;
  const auth=getAuth();
  const db=getFirestore();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>{
    const user=userCredential.user;
    const userData={
      email: email,
      firstName: firstName,
      lastName: lastName,
    };
  })
})