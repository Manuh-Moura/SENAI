function ver(idade){
    if(idade < 12){
        return 'criança'
    }else if (idade < 18){
        return 'adolescente'
    }else if (idade < 64){
        return 'adulto'
    }else{
        return 'idoso'
    }
}

let idades = [42,6,7,67,20]
idades.forEach(function(item){
console.log(ver(item))

}
)