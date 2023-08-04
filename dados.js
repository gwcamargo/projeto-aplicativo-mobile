document.querySelector(".btn-entrar").addEventListener("click", function() {
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    console.log(email)
    console.log(senha)
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert("Criado com sucesso!")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert("OPS! Houve um erro!")
    });
});