// Três formas de fazer a mesma coisa:

// let alunos = [[],[],[]]

// alunos[0][0] = "Ana"
// alunos[0][1] = "50"
// alunos[1][0] = "Fábio"
// alunos[1][1] = "25"
// alunos[2][0] = "Fulano"
// alunos[2][1] = "32"

// for(let i=0; i<alunos.length; i++){
//     for(let j=0; j<alunos[i].length; j++){
//         console.log(alunos[i][j])
//     }
// }

// let alunos = [[],[],[]]

// alunos[0][0] = "Ana"
// alunos[0][1] = "50"
// alunos[1][0] = "Fábio"
// alunos[1][1] = "25"
// alunos[2][0] = "Fulano"
// alunos[2][1] = "32"

// for(let elementos in alunos){
//     console.log(alunos[elementos].toString())
// }

let alunos = [[],[],[]]

alunos[0][0] = "Ana"
alunos[0][1] = "50"
alunos[1][0] = "Fábio"
alunos[1][1] = "25"
alunos[2][0] = "Fulano"
alunos[2][1] = "32"

for(let elementos of alunos){
    console.log(elementos.toString())
}

