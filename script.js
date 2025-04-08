let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let tumb = document.querySelector('.container .tumb')

btnNext.onclick = () => moveItemOnClick('next')
btnBack.onclick = () => moveItemOnClick('back')


function moveItemOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let tumbItems = document.querySelectorAll('.tumb .tumb-item')

    //console.log(listItems)
    //console.log(tumbItems)

    if(type === 'next'){
        list.appendChild(listItems[0])
        tumb.appendChild(tumbItems[0])
        container.classList.add('next')

    } else {
        list.prepend(listItems[listItems.length - 1])
        tumb.prepend(tumbItems[tumbItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('back')
        container.classList.remove('next')

    }, 3000);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

