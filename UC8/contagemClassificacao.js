// Autora: Sabrina Malafaia.
// Algoritmo para verificar se a quantidade de alunos presentes e par ou ímpar:
var numeroAlunos = window.prompt("Quantidade de alunos presentes?")
for (let i=0; i <= numeroAlunos; i++){
    if (i === 0){
        console.log("Este número é ZERO!")
    }else if (i%2 === 0){
        console.log(`O número ${i} é PAR.`)
        }else{
            console.log(`O número ${i} é IMPAR.`)
        }
}