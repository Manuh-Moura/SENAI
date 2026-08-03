let alunos = [
    {nome: "Manoella",
     nota: 9,
    },
    {nome: "Sophia",
     nota: 10,
    }
]
let nomes = alunos.map(function(aluno){
    return aluno.nome
})
console.log(nomes)