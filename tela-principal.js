const address = document.querySelector("#endereço")
const houseNumber = document.querySelector("#house-number")
const btnSaveLocation = document.querySelector("#btn-save-location")

const tipoLixoReciclavel = document.querySelector("#tipo-lixo-reciclavel")
const tipoLixoOrganico = document.querySelector("#tipo-lixo-organico")
const tipoLixoPublico = document.querySelector("#tipo-lixo-publico")

const tipoLixoComercial = document.querySelector("#tipo-lixo-comercial")

btnSaveLocation.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(address)

    if (address.value === "") {
        alert("Por favor, informe seu endereço!")
        return
    }

    if (houseNumber.value === "" || !validateHouseNumber(houseNumber.value)) {
        alert("Por favor, informe o número de sua casa!")
        return
    }
})

function validateHouseNumber(houseNumber) {
    const HouseNumberRegex = RegExp(
        /^[0-9]{4}$/
    )

    if (HouseNumberRegex.test(houseNumber)) {
        return true
    } else {
        return false
    }
}