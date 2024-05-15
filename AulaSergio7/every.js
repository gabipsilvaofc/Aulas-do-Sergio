let lista = [31, 68, 12, 45]

let verificaPares = lista.every(function(itens){
    return itens % 2 == 0
})
//if else em apenas 1 linha
verificaPares ? console.log("Todos são pares") : console.log("Nem todos são pares")

// if(verificaPares){
//     console.log("Todos são pares")
// }else{
//     console.log("Nem todos são pares")
// }
