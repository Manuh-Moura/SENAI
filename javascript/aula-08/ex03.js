let contatos = [
    {id: 1, nome: 'Manoella'},
    {id: 2, nome: 'Sophia'}
]
let encontrado = contatos.find(function(item){
    return item.id===2
})
console.log(encontrado)