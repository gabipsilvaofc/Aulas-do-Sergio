
let tabuleiro = new Array(3), botao, jogada = 1

for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha);
    for(let j = 0; j < tabuleiro[i].length; j++){
       botao = document.createElement('button')
       botao.setAttribute('type', 'button')
       botao.setAttribute('id', 'bt' + i + "" + j)
       botao.setAttribute('class', 'btJogo' + i)
       botao.setAttribute('onclick', 'marca(' + i + "," + j +")")
       botao.append(document.createTextNode(""));
       document.body.append(botao);
    }
}

function marca(linha, coluna){
    marcarCasa("bt" + linha + "" + coluna)
}

function marcarCasa(nomeBotao){
    if(jogada % 2 == 0){
        document.getElementById(nomeBotao).innerText = "O"
        document.getElementById(nomeBotao).style.color = "red"
    }else{
        document.getElementById(nomeBotao).innerText = "X"  
        document.getElementById(nomeBotao).style.color = "blue"
    }
    document.getElementById(nomeBotao).disabled = true
    jogada++
    if(jogada >= 5){
        encerraJogo()
    }
}



function encerraJogo(){
    if(document.getElementById("bt00").innerText == document.getElementById("bt01").innerText && document.getElementById("bt01").innerText == document.getElementById("bt02").innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado! \n Vencedor: " + document.getElementById("bt00").innerText)
    }
    if(document.getElementById("bt10").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt12").innerText && document.getElementById("bt10").innerText != ""){
        alert("Jogo finalizado! \n Vencedor: " + document.getElementById("bt10").innerText)
    }
    if(document.getElementById("bt20").innerText == document.getElementById("bt21").innerText && document.getElementById("bt21").innerText == document.getElementById("bt22").innerText && document.getElementById("bt20").innerText != ""){
        alert("Jogo finalizado! \n Vencedor: " + document.getElementById("bt20").innerText)
    }
    if(document.getElementById("bt00").innerText == document.getElementById("bt10").innerText && document.getElementById("bt10").innerText == document.getElementById("bt20").innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado! \n Vencedor: " + document.getElementById("bt00").innerText)
    }
    if(document.getElementById("bt01").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt21").innerText && document.getElementById("bt01").innerText != ""){
        alert("Jogo finalizado! \n Vencedor: " + document.getElementById("bt01").innerText)
    }
    if(document.getElementById("bt02").innerText == document.getElementById("bt12").innerText && document.getElementById("bt12").innerText == document.getElementById("bt22").innerText && document.getElementById("bt02").innerText != ""){
        alert("Jogo finalizado! \n Vencedor: " + document.getElementById("bt02").innerText)
    }
    if(document.getElementById("bt00").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt22").innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado! \n Vencedor: " + document.getElementById("bt00").innerText)
    }
    if(document.getElementById("bt02").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt20").innerText && document.getElementById("bt02").innerText != ""){
        alert("Jogo finalizado! \n Vencedor: " + document.getElementById("bt02").innerText)
    }
}

// let contRegressivo = tabuleiro.length -1
// for(cont in tabuleiro){
//     document.getElementById("bt" + cont + "" + contRegressivo--).style.color = "red"
// }