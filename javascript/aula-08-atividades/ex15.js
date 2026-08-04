let filmes = [
    {titulo: 'Matrix', ano: 1999, genero: 'Ficção'},
    {titulo: 'Interestelar', ano: 2014, genero: 'Ficção'},
    {titulo: 'Titanic', ano: 1997, genero: 'Romance'},
    {titulo: 'Avatar', ano: 2009, genero: 'Ficção'},
    {titulo: 'Coringa', ano: 2019, genero: 'Drama'}
]

let titulo = filmes.map(function(item){
    return item.titulo
})
console.log(titulo)
console.log('//////////////////////////////////////')
let ficcao = filmes.filter(function(item){
    return item.genero === 'Ficção'
})
console.log(ficcao)
console.log('//////////////////////////////////////')
let anos = filmes.find(function(item){
    return item.ano === 1997
})
console.log(anos)
console.log('//////////////////////////////////////')
let y2k = filmes.filter(function(item){
    return item.ano > '2000'
}).map(function(item){
    return item.titulo
})
console.log(y2k)
