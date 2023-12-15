import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getFirestore, collection, addDoc, getDoc, doc, query, getDocs, where, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const tableColetor = document.querySelector(".registro-coletas")

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
    } else if (validaColetor(user)) { 
        carregarTabela()
    } else {
        alert("Usuario não permitido!")
    }   
})

async function validaColetor(user) {
    const db = getFirestore(aplication);
    const valColetorRef = collection(db, "user_attributes")
    const q = query(valColetorRef, where("uid", "==", auth.currentUser.uid))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((user) => {
        if (user === "coletor") {
            return true
        } else {
            return false
        }
    })
}

async function carregarTabela(){
    const db = getFirestore(aplication);
    const localizacaoRef = collection(db, "localização do morador")
    const q = query(localizacaoRef)
    const querySnapshot = await getDocs(q)

    tableColetor.innerHTML = "<table>"
    
    querySnapshot.forEach((doc) => {

        var row = tableColetor.insertRow();
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
        
        bt.innerHTML="COLETA CONCLUIDA"
        cell5.appendChild(bt)
        bt.onclick = function(){
            concluirColeta(doc.id)
            carregarTabela()
        }
    })

    async function concluirColeta(docid) {
        const coletasRef = doc(db, "localização do morador", docid)

        await updateDoc(coletasRef, {
            status: "CONCLUIDO"
        })
    }
}