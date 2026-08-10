const h2 = document.querySelector('h2');
const btn = document.querySelector('button');
const analise = document.querySelector('#analise')

btn.addEventListener('click', function(){
    let firstDiv = document.createElement('div')
    firstDiv.textContent = h2.textContent
    analise.appendChild(firstDiv)

    let secDiv = document.createElement('div')
    secDiv.textContent = h2.innerHTML
    analise.appendChild(secDiv)

    let tirDiv = document.createElement('div')
    tirDiv.textContent = h2.style.color
    analise.appendChild(tirDiv)
})