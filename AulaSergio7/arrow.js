//primeira forma
// let saudacao = (texto, nome) => {
//     console.log(texto + nome)
// }

// saudacao("Olá, ", "Bianca")

//forma resumida
// let saudacao = () => console.log("Boa tarde a todos!")

// saudacao()

//usar o array para fazer calculos com ele
let lista = [30, 25, 15, 17, 26, 50]
let mapDaLista = lista.map(function(valorAtual){
    return valorAtual + 1
})

console.log(mapDaLista.toString())