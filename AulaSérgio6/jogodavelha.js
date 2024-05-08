let tabuleiro = new Array(3), botao

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
       botao.setAttribute('class', 'btjogo' + i)
       botao.setAttribute('onclick', '')
       botao.append(document.createTextNode(""));
       document.body.append(botao);
    }
}