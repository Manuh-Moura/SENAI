let h1 = document.querySelector('h1')
let btn = document.querySelector('button')
let resultado = document.querySelector('#resultado')

btn.addEventListener('click', function(){
    const li = document.createElement('li')
    li.textContent = 'Manipulação do DOM'
    resultado.appendChild(li)
})

