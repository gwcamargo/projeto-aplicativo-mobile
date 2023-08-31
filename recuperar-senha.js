    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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


const input_email = document.querySelector("#email")
const btn_cancelar = document.querySelector(".btn-cancelar")
const btn_recuperar = document.querySelector(".btn-recuperar")
const form_email = document.querySelector(".insert-email")

function recoverPassword() {
    showLoading()
    firebase.auth().sendPasswordResetEmail(input_email.value).then(() => {
        hideLoading()
        alert("Email enviado com sucesso!")
    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error))
    })
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado"
    }

    if (error.code == "auth/wrong-password") {
        return "Senha Inválida"
    }
    return error.message
}

recoverPassword()
