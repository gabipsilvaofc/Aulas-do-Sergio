let num = []
for (let i = 1; i <= 3; i++){
  num[i] = Number(prompt("Digite o " + i + "º número:"))
}
alert(num.reverse())