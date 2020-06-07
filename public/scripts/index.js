//Pegando os elementos para as variáveis
const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

//Função para remover a tela modal
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

//Função para adicionar a tela modal
close.addEventListener("click", () => {
    modal.classList.add("hide")
})