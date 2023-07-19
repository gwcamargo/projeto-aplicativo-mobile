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
            alert("Número inválido, tente novamente")
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
    function validarTelefone (telefone) {
        // criar uma regex para validar telefone
        const telRegex = new RegExp(
            /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/
        )

        if (telRegex.test(telefone)) {
            return true
        } else {
            return false
        }
    }