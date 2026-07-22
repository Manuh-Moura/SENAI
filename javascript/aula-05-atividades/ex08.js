let compra = 250;

if (compra >= 500){
    console.log(`Você recebeu 20% de desconto. Total do desconto: ${compra * 0.2}, e Valor toal de : ${compra * 0.8}` )   
} else if (compra >= 200){
    console.log(`Você recebeu 10% de desconto. Total do desconto: ${compra * 0.1}, e Valor toal de : ${compra * 0.9}` )
} else if ( compra >= 100){
    console.log(`Você recebeu 5% de desconto. Total do desconto: ${compra * 0.05}, e Valor toal de : ${compra * 0.95}` )
} else{
    console.log('Você não recebeu desconto, seu pobre')
}