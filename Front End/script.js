// Seleciona os botões de avançar e voltar
let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

// Seleciona os elementos principais do carrossel
let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let tumb = document.querySelector('.container .tumb')

// Define o que acontece ao clicar nos botões
btnNext.onclick = () => moveItemOnClick('next')   // Avança
btnBack.onclick = () => moveItemOnClick('back')   // Volta

// Função que move os itens do carrossel
function moveItemOnClick(type){
    // Seleciona os itens da lista e das miniaturas
    let listItems = document.querySelectorAll('.list .list-item')
    let tumbItems = document.querySelectorAll('.tumb .tumb-item')

    // Se for próximo
    if(type === 'next'){
        // Move o primeiro item para o final
        list.appendChild(listItems[0])
        tumb.appendChild(tumbItems[0])
        // Adiciona a classe de animação "next"
        container.classList.add('next')
    } 
    // Se for voltar
    else {
        // Move o último item para o início
        list.prepend(listItems[listItems.length - 1])
        tumb.prepend(tumbItems[tumbItems.length - 1])
        // Adiciona a classe de animação "back"
        container.classList.add('back')
    }

    // Remove a classe de animação após 3 segundos
    setTimeout(() => {
        container.classList.remove('back')
        container.classList.remove('next')
    }, 3000)
}

// Função para ativar/desativar modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
}
