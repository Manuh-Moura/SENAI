   let filmes = [
    {titulo: "A bela e a fera", ano: 2006, genero: 'animaçao',},
    {titulo: "Para todos os garotos que ja amei", ano: 2019, genero: 'romace',},
    {titulo: "Anne with E", ano: 2019, genero: 'romance',},
]

filmes.forEach(function(filme){
    console.log(`Titulo: ${filme.titulo} - Ano: ${filme.ano} - Genero: ${filme.genero}`)
}
)