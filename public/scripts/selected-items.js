//pegar todas as li's
const itemsToCollect = document.querySelectorAll(".items-grid li")
for(const items of itemsToCollect){
    items.addEventListener("click", handleSelectedItem)
}

//dados de seleção de items
const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

//função para itens selecionado
function handleSelectedItem(event){
    const itemsLI = event.target

    //adiciona ou remove uma classe pelo JavaScript
    itemsLI.classList.toggle("selected")
    const itemsId = itemsLI.dataset.id

    //verificação de itens selecionados
    const alreadySelected = selectedItems.findIndex(item => {
    const itemFound = item == itemsId //retorna true ou false
    return itemFound
    })

    //tirar iten da seleção
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter( item => {
            const ItemIsDifferent = item != itemsId //false para tirar
            return ItemIsDifferent
        })
        selectedItems = filteredItems
    }
    //adicionar itens a seleção
    else{
        selectedItems.push(itemsId)
    }
    collectedItems.value = selectedItems
}