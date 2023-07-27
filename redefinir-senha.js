const FormRedefinirSenha = document.querySelector(".form-redefinicao-senha")
const RedefinirSenha = document.getElementById("redefinir-senha")
const ConfirmeSuaSenha = document.getElementById("confirme-sua-senha")
const btnSalvarSenha = document.querySelector(".btn-salvar-senha")

FormRedefinirSenha.addEventListener("submit", (event) => {
    event.preventDefault()

    if (RedefinirSenha.value === "") {
        alert("Por favor, redefine sua senha!")
        return   
    } else if (!validaSenha(RedefinirSenha.value, 8)) {
        alert("Sua senha precisa ter no mínimo 8 caracteres!")
        return
    }

    if (ConfirmeSuaSenha.value === "") {
        alert("Por favor, confirme sua senha!")
        return
    } else if (ConfirmeSuaSenha.value !== RedefinirSenha.value) {
        alert("Sua senha é diferente!")
        return
    }

    FormRedefinirSenha.submit()
})

function validaSenha(RedefinirSenha, minDigits) {
    if (RedefinirSenha.length >= minDigits) {
        return true
    } else {
        return false
    }
}