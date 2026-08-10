let conteudo = document.querySelector('#conteudo')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    conteudo.textContent = conteudo.innerHTML
    
})