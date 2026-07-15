let amigos = [
    {nome: 'Sophia', idade: 14},
    {nome: 'Manuela', idade: 15},
    {nome: 'Bruna', idade: 15},
    {nome: 'Amanda', idade: 19},
]

nomes = [];
idades = [];

amigos.forEach(function(amigo){
    nomes.push(amigo.nome)
    idades.push(amigo.idade)
}
)

console.log(nomes, idades)
