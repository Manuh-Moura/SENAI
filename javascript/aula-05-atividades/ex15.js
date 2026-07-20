let num1 = 15;
let num2 = 5;
let operador = '+'


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
        if (num2 !== 0) {
        console.log('Divisão por zero não permitida')
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