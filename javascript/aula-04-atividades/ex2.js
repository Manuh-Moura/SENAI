let pessoa = {
    nome: 'Manoella',
    idade: 15,
    altura: 160,
    estudante: true
}

for(let chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`)
}