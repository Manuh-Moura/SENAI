let important = document.querySelector('.important');
let btn = document.querySelector('button')
let destaque = document.querySelector('#destaque')

btn.addEventListener('click', function(){
    destaque.textContent = important.textContent
    
})