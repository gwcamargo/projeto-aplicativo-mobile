import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const address = document.querySelector("#endereço")
const houseNumber = document.querySelector("#house-number")
const btnSaveLocation = document.querySelector("#btn-save-location")

const tipoLixoCheckbox = document.querySelector("#tipo-lixo")
const locationTable = document.querySelector(".location-table")

const firebaseConfiguration = {
    apiKey: "AIzaSyBKkyrtfmk3FfWfU6icWxMYCk8O3awrJBY",
    authDomain: "recicla-manduri.firebaseapp.com",
    projectId: "recicla-manduri",
    storageBucket: "recicla-manduri.appspot.com",
    messagingSenderId: "207545198480",
    appId: "1:207545198480:web:70ee198d67c84049353515",
    measurementId: "G-T6EYPEYFHG"
};

// Initialize Firebase
const aplication = initializeApp(firebaseConfiguration);
const auth = getAuth(aplication)

auth.onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = "login.html"
    }
    
})

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(aplication);

locationTable.getFirestore

btnSaveLocation.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(address)

    if (address.value === "") {
        alert("Por favor, informe seu endereço!")
        return
    }

    if (houseNumber.value === "") {
        alert("Por favor, informe o número de sua casa!")
        return
    }

    alert(tipoLixoCheckbox.value)

    if (tipoLixoCheckbox.value) {
        alert("Marque o tipo do lixo")
        console.log(tipoLixoCheckbox)
    }

    addDoc(collection(db, 'localização do morador'), {
        uid: auth.currentUser.uid,
        address: address.value,
        houseNumber: parseInt(houseNumber.value),
        tipoLixo: tipoLixoCheckbox.value
    })
    .then(
        (doc) => alert("Localização salva", doc.id)
    )
    .catch(console.log)

    getDateAndHour()
})

// função para pegar data e hora atual
function getDateAndHour() {
    // Data
    const date = new Date()
    const dayweek = date.getDay()

    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    // Hora
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const monthArray = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

    const dayweekArray = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")

    document.write(dayweekArray[dayweek] + "," + day + "de" + monthArray[month] + "de" + year)
}