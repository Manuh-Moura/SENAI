let celular = {
    marca: 'samsung',
    modelo : 'S26 Ultra',
    ano : 2026,
    cor : 'branco',
}

for(let chave in celular){
    console.log(`${chave}: ${celular[chave]}`)
}