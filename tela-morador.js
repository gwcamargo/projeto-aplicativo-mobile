import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getFirestore, collection, addDoc, getDoc, doc, query, getDocs, where,deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const address = document.querySelector("#endereço")
const houseNumber = document.querySelector("#house-number")
const btnSaveLocation = document.querySelector("#btn-save-location")

const tipoLixoCheckbox = document.querySelector("#tipo-lixo")
const locationTable = document.querySelector(".data-table") 
export const btnLogout = document.querySelector(".btn-logout")

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
    if (user===null) {
        window.location.href = "login.html"
    } else {
        carregaTabela()
    }
})

async function excluirDados(docid) {
    await deleteDoc(doc(db, "localização do morador", docid)).then((response)=>{
    console.log(response)
    }).catch((error)=>{
        console.log(error)
    })
}

// Initialize Cloud Firestore and get a reference to the service
async function carregaTabela(){
    const db = getFirestore(aplication);
    const localizacaoRef = collection(db, "localização do morador")
    const q = query(localizacaoRef, where("uid", "==", auth.currentUser.uid))
    const querySnapshot = await getDocs(q)

    locationTable.innerHTML = "<table>"
    
    querySnapshot.forEach((doc) => {

        var row = locationTable.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2)
        var cell3 = row.insertCell(3)
        var cell4 = row.insertCell(4)
        var cell5 = row.insertCell(5)

        cell0.innerHTML = doc.data().address
        cell1.innerHTML = doc.data().houseNumber
        cell2.innerHTML = doc.data().tipoLixo
        cell3.innerHTML = doc.data().date.toDate()
        cell4.innerHTML = doc.data().status
        
        var bt = document.createElement("button")
        bt.id=doc.id
        
        bt.innerHTML="EXCLUIR"
        cell5.appendChild(bt)
        bt.onclick = function(){
            excluirDados(doc.id)
            carregaTabela()
        }
    })
}

const db = getFirestore(aplication);

btnSaveLocation.addEventListener("click", (event) => {
    event.preventDefault()

    if (address.value === "") {
        alert("Por favor, informe seu endereço!")
        return
    }

    if (houseNumber.value === "") {
        alert("Por favor, informe o número de sua casa!")
        return
    }
    

    addDoc(collection(db, 'localização do morador'), {
        uid: auth.currentUser.uid,
        address: address.value,
        houseNumber: parseInt(houseNumber.value),
        tipoLixo: tipoLixoCheckbox.value,
        date: new Date(),
        status: 'PENDENTE' 
    })
    .then(
        (doc) => alert("Localização salva", doc.id)
        
        
    )
    .catch(console.log)
    carregaTabela()
})