
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
    }else{
        document.getElementById(nomeBotao).innerText = "X"  
    }
    document.getElementById(nomeBotao).disabled = true
    jogada++
}