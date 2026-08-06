let display =  document.querySelector('.display')
let btnAu = document.querySelector('.btnAu')
let btnDimi = document.querySelector('.btnDimi')

let contador = 0

btnAu.addEventListener('click', function(){
    contador++;
    display.textContent = contador;
})

btnDimi.addEventListener('click', function(){
    contador --;
    display.textContent = contador;
})