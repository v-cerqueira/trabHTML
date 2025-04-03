let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let tumb = document.querySelector('.container .tumb');

btnNext.onclick = () => moveItemsOnClick('next');
btnBack.onclick = () => moveItemsOnClick('back');

function moveItemsOnClick(type) {
    let listitems = document.querySelectorAll('.list .list-item');
    let tumbitems = document.querySelectorAll('.tumb .tumb-item');

    container.classList.add(type); // Adiciona a classe de animação

    setTimeout(() => {
        if (type === 'next') {
            list.appendChild(listitems[0]);
            tumb.appendChild(tumbitems[0]);
            container.classList.add(next); // Adiciona a classe de animação
        } else {
            list.prepend(listitems[listitems.length - 1]);
            tumb.prepend(tumbitems[tumbitems.length - 1]);
            container.classList.add(back); // Adiciona a classe de animação
        }

        // Remover classes de animação após completar o movimento
        container.classList.remove('next');
        container.classList.remove('back');
    }, 3000); // Tempo igual ao da animação no CSS
}
