function calculoAreaTerreno(largura, profundidade){
    let areaTotal = largura * profundidade
    return areaTotal
}

let medidaMansao = calculoAreaTerreno (100, 100)
let medidaPadrao = calculoAreaTerreno (50, 40)
let medidaSobrado = calculoAreaTerreno (30, 40)
let medidaComercial = calculoAreaTerreno (40,40)

console.log("Mansão: " + medidaMansao + "m²")
console.log("Padrão: " + medidaPadrao + "m²")
console.log("Sobrado: " + medidaSobrado + "m²")
console.log("Comercial: " + medidaComercial + "m²")
