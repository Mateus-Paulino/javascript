/*
let valores = [8 ,1 ,7 ,4 ,9]
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o ${valores[pos]}`)
}
*/

//FORMA SIMPLIFICADA
let valores = [8 ,1 ,7 ,4 ,9]
valores.push(2) //ADICIONEI O NUMERO 2 VALOR 
valores.sort()  // ESSE SORT COLOCA OS NUMERO EM ORDEM CRESCENTE
for(let pos in valores) {
    console.log(`A posição ${pos} tem o ${valores[pos]}`)
}