const FormRedefinirSenha = document.querySelector(".form-redefinicao-senha")
const RedefinirSenha = document.querySelector("#redefenir-senha")
const ConfirmeSuaSenha = document.querySelector("#confirme-sua-senha")
const btnSalvarSenha = document.querySelector(".btn-salvar-senha")

FormRedefinirSenha.addEventListener("submit", (event) => {
    event.preventDefault()

    if (!validaSenha(RedefinirSenha, 8)) {
        alert("Sua senha deve ter no mínimo 8 caracteres!")
        return
    }

    FormRedefinirSenha.submit()
})

function validaSenha(RedefinirSenha, minDigits) {
    if (RedefinirSenha >= minDigits) {
        return true
    } else {
        return false
    }
}