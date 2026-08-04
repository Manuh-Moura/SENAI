let produtos = [
    {id:1, nome:'qboa', preco:22.99, categoria:'limpeza'},
    {id:2, nome:'sabonete', preco:4, categoria:'higiene'},
    {id:3, nome:'escova', preco:6.70, categoria:'higiene'},
    {id:4, nome:'espelho', preco:67.80, categoria:'casa'},
    {id:5, nome:'pia', preco:200, categoria:'casa'},
]
let nomes = produtos.map(function(item){
    return item.nome
})
console.log(nomes)
console.log('/////////////////////////////////////////////')
let casas = produtos.filter(function(item){
    return item.categoria === 'casa'
})
console.log(casas)
console.log('/////////////////////////////////////////////')
let ides = produtos.find(function(item){
    return item.id ===4
})
console.log(ides)
console.log('/////////////////////////////////////////////')
let compras = produtos.filter(function(item){
    return item.preco>10
}).map(function(item){
    return item.nome
})
console.log(compras)

