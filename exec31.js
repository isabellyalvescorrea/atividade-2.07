//Escrever um algoritmo que leia três valores inteiros distintos e os escreva em ordem crescente.

let x = 12, y = 5, z = 9;
let lista = [x, y, z];
lista.sort((a, b) => a - b);
console.log("Ordem crescente:", lista);
