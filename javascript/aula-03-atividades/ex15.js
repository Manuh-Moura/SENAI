//01
let compras = []
console.log(compras)
//02
compras.push('batata', 'cenoura', 'tomate','alface', 'fini')
console.log(compras)
//03
compras.forEach(function(item,indice){
    console.log(`${indice +1}º - ${item}`)
})
//04
console.log(compras.includes('arroz'))
//05
compras.pop()
console.log(compras)
//06
console.log(compras.length)
compras.forEach(function(item,indice){
    console.log(` ${indice +1}º - ${item}`)
})