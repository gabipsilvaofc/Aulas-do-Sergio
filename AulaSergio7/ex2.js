// function saudacao(nome){
//     console.log("Boa tarde, " + nome)
// }
// saudacao("Maria")

function saudacao(nome = "Luiz"){
    console.log("Boa tarde, " + nome)
}
//Aqui ele tem um valor padrão, se não for adicionado nenhum valor a função, o valor padrão será usado
saudacao()