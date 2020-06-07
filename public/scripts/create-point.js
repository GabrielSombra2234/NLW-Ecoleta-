// API localidade: https://servicodados.ibge.gov.br/api/v1/localidades/estados
// API cidade: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos

//Função para selecionar os estados brasileiros
function populateUFs(){
    const ufState = document.querySelector("select[name=UF]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => response.json())
    .then(states => {
        for(const state of states){
            ufState.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}
populateUFs() //Execução da função acima

//Função para selecionar as cidades brasileiras
function getCities(event){
    const citySelect = document.querySelector("select[name=CD]")
    const stateInput = document.querySelector("input[name=State]")
    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option value>Selecione a Sua Cidade</option>"
    citySelect.disabled = true
    fetch(url)
    .then(response2 => response2.json())
    .then(cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

//Desbloqueio das cidades
document
    .querySelector("select[name=UF]")
    .addEventListener("change", getCities)