let celsius = [0, 15, 30, 45]

let fahre = celsius.map(function( f , c){
    return (f = c * 9/5) + 32
})
console.log(fahre)