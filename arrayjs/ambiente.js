// Vetor
let num = [5, 7 , 6 , 9]
num.push(3) //ADICIONEI O NUMERO 2 VALOR 
num.sort() // ESSE SORT COLOCA OS NUMERO EM ORDEM CRESCENTE
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) { //CRIEI UM AVISO -1 NO JS ISSO SIGNIFICA QUE NÃO EXISTE 
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}
