const FormRedefinirSenha = document.querySelector(".form-redefinicao-senha")
const RedefinirSenha = document.querySelector(".redefenir-senha")
const ConfirmeSuaSenha = document.querySelector("#confirme-sua-senha")
const btnSalvarSenha = document.querySelector(".btn-salvar-senha")

FormRedefinirSenha.addEventListener("submit", (event) => {
    event.preventDefault()

    if (RedefinirSenha.value === "" || !validaSenha(RedefinirSenha.value, 8)) {
        alert("Por favor, redefine sua senha!")
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