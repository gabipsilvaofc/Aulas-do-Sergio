// //ex1:
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

// //ex2
// let num = []
// for (let i = 1; i <= 3; i++){
//   num[i] = Number(prompt("Digite o " + i + "º número:"))
// }
// alert(num.reverse())

// //ex3:
// let numeros = [99, 127, 63, 72], soma = 0
// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
// }
// console.log(soma)

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

// //ex5
// let numero = [125, 12, 38, 91, 24]
// let maior = 0

// for(let i=0; i < numero.length; i++){
//   if(numero[i] > maior){
//   maior = numero[i]
//   }
//   console.log(maior)
// }

// //ex6
let nums = []
let impar = []
for (let i = 0; i < 10; i++) {
    nums[i] = Number(prompt("Digite o " + (i + 1) + "º número: "))
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 ) {
        impar.push(nums[i])
    }
}
alert(impar.join())
