let carro = {
    marca: 'Hyundai' ,
    modelo: 'HB20' ,
    ano: 2012,
    cor: 'preto',
    placa: 'EVC8F63',
}

console.log(carro.marca, carro.modelo, carro.ano, carro.cor, carro.placa)

delete carro.placa;

console.log('placa' in carro)