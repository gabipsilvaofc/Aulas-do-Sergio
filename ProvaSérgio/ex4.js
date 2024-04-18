let alunos = [], notas = []
let soma = 0, media = '', qtdMaior5 = 0

for(i=0; i<5; i++){
  alunos[i] = prompt("Digite o seu nome: ")
  notas[i] = Number(prompt("Qual a sua nota: "))
}
for(i=0; i<notas.length; i++){
  if(notas[i] > 5){
    soma += notas[i]
    qtdMaior5++
  }
}
alert(media = soma / qtdMaior5)