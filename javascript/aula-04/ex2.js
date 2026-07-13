let livro = {
    titulo: "Diário de um Banana",
    autor: "Manoella",
    ano: 1860,
    pag: 1000
}




console.log(`O nome no livro é ${livro.titulo}, escrito por ${livro.autor} em ${livro.ano}, e tem ${livro.pag} páginas.`)

livro.autor = "Sophia";
livro.ano = 1990;
livro.pag = 500;

console.log(`O nome no livro é ${livro.titulo}, escrito por ${livro.autor} em ${livro.ano}, e tem ${livro.pag} páginas.`)