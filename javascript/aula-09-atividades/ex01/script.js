let h1 = document.querySelector('h1')
let btn = document.querySelector('button')
let resultado = document.querySelector('#resultado')

btn.addEventListener('click', function(){
    resultado.textContent = h1.textContent
    
})

