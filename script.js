// Criando as variáveis para manipular os elementos do DOM.
const form = document.querySelector("form")
const valueInput = document.getElementById("accountValue")
const valuePercent = document.getElementById("tipValue")
const valuePeople = document.getElementById("peopleValue")
const btnSubmit = document.querySelector("button")
const showResult = document.getElementById("showResult")
const spanError = document.querySelectorAll("#error")
const btn = document.querySelectorAll("#btns button")
const p = document.querySelectorAll("#showResult p")

// Quando o formulário for enviado...
form.addEventListener("submit", function (e) {

    // Prevenir o comportamento padrão do formulário.
    e.preventDefault()

    // Toda vez que o formulário for submetido, ele vai chamar a função verifyInput e verificar cada input, passando o primeiro argumento sendo o próprio input e o segundo o index das span's que contém a mensagem de erro.
    verifyInput(valueInput, 0)
    verifyInput(valuePercent, 1)
    verifyInput(valuePeople, 2)

    // Última verificação para garantir que todos os campos foram preenchidos corretamente.
    if (valueInput.value === "" || valueInput.value === "0" || valuePercent.value === "" || valuePercent.value === "0" || valuePeople.value === "" || valuePeople.value === "0") {
        alert("Por favor, preencha todos os campos corretamente.")
        showResult.classList.add("ocult")
    } else {
        // Calculando o valor da conta com a gorjeta e dividindo pelo número de pessoas.
        const total = Number(valueInput.value) + (Number(valueInput.value) * Number(valuePercent.value / 100))
        const totalPerPerson = total / Number(valuePeople.value)

        // Atualizando o conteúdo dos parágrafos com os valores calculados.
        p[0].textContent = `Gorjeta: ${valuePercent.value}%`
        p[1].textContent = `Total a ser pago: ${total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}`
        p[2].textContent = `Valor por pessoa: ${totalPerPerson.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}`

        // Exibindo o resultado.
        showResult.classList.remove("ocult")
    }
})

// Ao clicar no botão de limpar, ele limpa os campos do formulário(por padrão do próprio type="reset" do HTML) e oculta o resultado.
btn[1].addEventListener("click", function () {
    showResult.classList.add("ocult")
})

// Função para verificar se os inputs estão vazios ou não, se tiver, exibe uma span erro.
function verifyInput(input, number) {
    // Se estiver vazio ou for igual a "0" exibe o span de erro correspondente.
    if (input.value === "" || input.value === "0") {
        spanError[number].classList.remove("ocult")
    }
    // Se não estiver vazio ou seu valor não é zero, oculta o span de erro correspondente.
    else {
        spanError[number].classList.add("ocult")
    }
}