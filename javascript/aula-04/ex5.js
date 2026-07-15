let produtos = [
    {nome: 'controle' , preco: 70.67 , categoria:'eletro' },
    {nome: 'pão' , preco: 6.74 , categoria: 'alimentos' },
    {nome: 'calça jeans', preco: 230.82 , categoria: 'roupas' },
    {nome: 'PS5', preco: 3500 , categoria: 'video-game' },
    {nome: 'gloss' , preco: 79.69 , categoria: 'beleza' },
]
let total = 0;
produtos.forEach(function(produto){
    console.log(`nome: ${produto.nome} - preco: ${produto.preco}`)
    total = total + produto.preco;
}
)
 console.log(`Valor total é ${total} `)