let titulo = document.querySelector('h1')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    titulo.textContent = "Título Modificado com Sucesso!"
})