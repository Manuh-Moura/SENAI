let titulo = document.querySelector("h1");

let btnDesativar = document.querySelector(".btnDesativar");

let btnAtivar = document.querySelector(".btnAtivar")


btnAtivar.addEventListener("click", function(){
    titulo.classList.add("is-active")
});

btnDesativar.addEventListener("click", function(){
    titulo.classList.remove("is-active")
});