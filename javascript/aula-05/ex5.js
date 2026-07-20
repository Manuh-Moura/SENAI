let num = 10;
let num2 = 20;
let operador = '-';

switch (operador) {
    case '+':
        console.log(num + num2)
        break;
    case '-':
        console.log(num - num2)
        break;
    case '*':
        console.log(num * num2)
        break;
    case '/':
        if (num2 == 0) {
        console.log('numero não tem divisão')
    } else {
        console.log(num / num2)
    }
        break;
    case '%':
        console.log(num % num2)
        break;
    default:
        console.log('error 404')
}