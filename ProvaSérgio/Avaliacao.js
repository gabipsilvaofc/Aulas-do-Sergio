// //ex1
// let menu = ''
// let sabor = []

// while (menu != "4"){
// menu = prompt(`======== MENU ========
// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido
// `)
// switch(menu){
//     case '1':
//         if(sabor.length < 3){
//         sabor.push(prompt("Digite um sabor para adicionar: "))
//         }else{
//             alert("Limite de sabores atingido!")
//         }
//     break
//     case '2':
//         sabor.pop(prompt("Digite o nome que você quer excluir: "))
//         if(sabor.pop = true){
//             alert("Sabor excluido!")
//         }
//     break
//     case '3':
//         alert(sabor)
//     break
//     case '4':
//         if(sabor > 1){
//         alert("Seu pedido foi registrado!")
//         }else if(sabor < 1){
//         alert("Adicione pelo menos UM sabor!")
//         }else{
//         alert(sabor)
//         }
//     break
//     }
// }


//Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba-
// o.
// Modifique os elementos do array de modo que a sequência de números fique do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1


// //ex2
// let numeros = []
// while(numeros != 3){
//     numeros = Number(prompt("Digite 3 números: "))
// }
// alert(numeros.sort())

// for (let i = 1; i < 4; i++) {
// numeros.length = Number(prompt("Digite três números:"))
// }
// alert(numeros.length)


// for(let i = numeros.length -1; i>=0; i--){
//     alert(numeros[i])
// }
// console.log(numeros)

// //ex3
// let numeros = [99, 127, 63, 72], soma = 0
// // for(i = 0; )
// // soma += numeros[i]
// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];
// }

// console.log(soma)

// let numeros = [125, 12, 38, 91, 24]
// let maior = 0

// for(let i=0; i < numeros.length; i++){
//   if(numeros[i] > maior){
//   maior = numeros[i]
//   }
//   console.log(maior)
// }

//ex4
// let aluno = [], notas = [], media = 0, menu

// while(menu != 0){

// }

// //ex2
// let num = []
// for (let i = 1; i <= 3; i++){
//   num[i] = Number(prompt("Digite o " + i + "º número:"))
// }
// alert(num.reverse())

// //ex4
// let alunos = [], notas = []
// let soma = 0, media = '', qtdMaior5 = 0

// for(i=0; i<5; i++){
//   alunos[i] = prompt("Digite o seu nome: ")
//   notas[i] = Number(prompt("Qual a sua nota: "))
// }
// for(i=0; i<notas.length; i++){
//   if(notas[i] > 5){
//     soma += notas[i]
//     qtdMaior5++
//   }
// }
// alert(media = soma / qtdMaior5)

//ex6
let num = [10,27,43], impar = [], par = []
// for(i=0; i<3; i++){
//   num [i] = Number(prompt("Digite o " + (i+1) + "º número: " ))
// }
for(i=0; i<num.length; i++){
  if(num[i] % 2 != 0){
    impar.push(num)
  }else{
    par.push(num)
  }
}
console.log(impar)
// alert(impar.sort())



// for(i=0; i<num.length; i++){
//   if(num % 2 != 0){
//     impar.push(num[i])
//   }
// }
// alert(impar.join()) 

// for (let i = 0; i < num[i].length; i++) {
//   if (num % 2 != 0) {
//   impar.push(num)
//   }
// }
// alert(impar)

