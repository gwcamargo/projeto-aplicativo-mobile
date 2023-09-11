// validar campos da tela de cadastro (cadastro.html)
    // pegar os elementos HTML em classes e id

    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

    import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore-compat.js";
     
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
   
    // Initialize Firebase
    function cadastrarUsuario(email, senha, nome, telefone, cpf, confirm_password, tipo_usuario){
        const criarUsuario = createUserWithEmailAndPassword(auth, email, senha, nome, telefone, cpf, confirm_password, tipo_usuario)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const user01 = {
                cpf: () => cpf,
                email: () => email,
                nome_completo: () => nome,
                senha: () => senha,
                telefone: () => telefone,
                tipo_usuario: () => tipo_usuario
            }
    
            firebase.firestore()
                .collection("user01")
                .add(user01)
                .then(() => {
                    window.location.href = "tela-principal.html"
                })
                .catch(() => {
                    alert("Erro ao salvar usuário")
                })
            
            alert("Criado com sucesso!")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("OPS! Houve um erro!" + errorMessage)
        });
    }
    
    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://support.google.com/firebase/answer/7015592
    
    const firebaseCon = {
        apiKey: "AIzaSyBKkyrtfmk3FfWfU6icWxMYCk8O3awrJBY",
        authDomain: "recicla-manduri.firebaseapp.com",
        projectId: "recicla-manduri",
        storageBucket: "recicla-manduri.appspot.com",
        messagingSenderId: "207545198480",
        appId: "1:207545198480:web:70ee198d67c84049353515",
        measurementId: "G-T6EYPEYFHG"
    };

    // Initialize Firebase
    const aplication = initializeApp(firebaseCon);


    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(aplication);

    // pegar os elementos HTML em classes e id
    const form_cadastro = document.querySelector(".form-cadastro")
    const nome = document.querySelector("#nome")
    const email = document.querySelector("#iemail")

    const telefone = document.querySelector("#telefone")
    const cpf = document.querySelector("#cpf")
    const senha = document.querySelector("#isenha")
    
    const confirm_password = document.querySelector("#confirmar-senha")
    const tipo_usuario = document.querySelector("#tipo-usuario")

    form_cadastro.addEventListener("submit", (event) => {
        event.preventDefault()

        // verificar se o nome está vazio
        if (nome.value === "") {
            alert("Por favor, preencha o seu nome")
            return
        }

        // verificar se o email está preenchido e se é válido
        if (email.value === "" || !validateEmail(email.value)) {
            alert("Por favor, digite seu email")
            return
        }
        
        // verificar se o telefone está preenchido corretamente e se é válido
        if (telefone.value === "" || !validarTelefone(telefone.value)) {
            alert("Por favor, digite o seu número de telefone")
            return
        }

        // verificar se o cpf está preenchido corretamente e se é válido
        if (cpf.value === "") {
            alert("Por favor, insira seu CPF!")
            return
        } else if (!isValidCPF(cpf.value)) {
            alert("CPF inválido, tente novamente!")
            return
        }

        // verificar se a senha está preenchida corretamente e se é válido
        if (senha.value === "" || !isValidPassword(senha.value, 8)) {
            alert("Sua senha deve ter no mínimo 8 caracteres")
            return
        }

        // verificar se a senha não é diferente da anterior e se está preenchida
        if (confirm_password.value === "") {
            alert("Por favor, confirme sua senha!")
            return
        } else if (confirm_password.value !== senha.value) {
            alert("Sua senha é diferente!")
            return
        }

        cadastrarUsuario(email.value, senha.value, nome.value, cpf.value, telefone.value, confirm_password.value, tipo_usuario.value)
        
        // se todos os campos estiverem corretamente preenchidos, envie o form
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

    // função para validar telefone
    function validarTelefone(telefone) {
        // criar uma regex para validar telefone
        const telRegex = new RegExp(
            /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
        )

        if (telRegex.test(telefone)) {
            return true
        } else {
            return false
        }
    }

    // função para validar CPF
    function isValidCPF(cpf) {
        const cpfRegex = new RegExp(
           /^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$/
        )

        if (cpfRegex.test(cpf)) {
            return true
        } else {
            return false
        }
    }

    // função para validar a nova senha
    function isValidPassword(password, minDigits) {
        if (password.length >= minDigits) {
            return true
        } else {
            return false
        } 
    }

    function btnRegistrar() {
        window.location.href = "tela-principal.html"
    }

    function btnVoltar() {
        window.location.href = "login.html"
    }