// validar campos da tela de cadastro (cadastro.html)

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
        
        // se todos os campos estiverem corretamente preenchidos, envie o form
        form_cadastro.submit()
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