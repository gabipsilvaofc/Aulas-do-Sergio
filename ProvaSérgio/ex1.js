let menu = ''
let sabor = []

while (menu != "4"){
menu = prompt(`======== MENU ========
1- Adicionar sabor
2- Remover sabor
3- Visualizar sorvete
4- Finalizar pedido
`)
switch(menu){
    case '1':
        if(sabor.length < 3){
        sabor.push(prompt("Digite um sabor para adicionar: "))
        }else{
            alert("Limite de sabores atingido!")
        }
    break
    case '2':
        sabor.pop(prompt("Digite o nome que você quer excluir: "))
        if(sabor.pop = true){
            alert("Sabor excluido!")
        }
    break
    case '3':
        alert(sabor)
    break
    case '4':
        if(sabor > 1){
        alert("Seu pedido foi registrado!")
        }else if(sabor < 1){
        alert("Adicione pelo menos UM sabor!")
        }else{
        alert(sabor)
        }
    break
    }
}