// validar campos da tela de login (index.html)

    // pegar os elementos HTML em classes e id
    const form_login = document.querySelector(".form-login")
    const email = document.querySelector("#email")
    const password = document.querySelector("#senha")
    const btnEntrar = document.querySelector(".btn-entrar")

    form_login.addEventListener("submit" , (event) => {
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

        // se todos os campos estiverem corretamente preenchidos, envie o form 
        form_login.submit()
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