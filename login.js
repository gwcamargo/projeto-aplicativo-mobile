// validar campos da tela de login (login.html)
// pegar os elementos HTML em classes e id

import { setPersistence, getAuth, signInWithEmailAndPassword, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKkyrtfmk3FfWfU6icWxMYCk8O3awrJBY",
    authDomain: "recicla-manduri.firebaseapp.com",
    projectId: "recicla-manduri",
    storageBucket: "recicla-manduri.appspot.com",
    messagingSenderId: "207545198480",
    appId: "1:207545198480:web:70ee198d67c84049353515",
    measurementId: "G-T6EYPEYFHG"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.href = "tela-morador.html"
    }
})


// Initialize Firebase
function autenticarUsuario(email, password) {
    signInWithEmailAndPassword(auth, email, password).then((user) => { })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("OPS! Houve um erro!" + errorMessage)

        })
}

const form_login = document.querySelector(".form-login")
const email = document.querySelector("#email")
const password = document.querySelector("#senha")

form_login.addEventListener("submit", (event) => {
    event.preventDefault()

    // verificar se o email está preenchido e se é válido
    if (email.value === "" || !validateEmail(email.value)) {
        alert("Por favor, digite seu email")
        return
    }

    // verificar se a senha está preenchida
    if (!validatePassword(password.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos")
        return
    }


    autenticarUsuario(email.value, password.value);
    return false;
})

// função para validar email
function validateEmail(email) {
    // criar uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true
    } else {
        return false
    }
}

// função para validar senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true
    } else {
        return false
    }
}