//Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser os lados de um triângulo. Se
//forem informar qual o tipo de triângulo que eles formam: equilátero, isóscele ou escaleno.
//Propriedade: o comprimento de cada lado de um triângulo é menor do que a soma dos comprimentos dos outros
//dois lados:
// • Triângulo Equilátero: aquele que tem os comprimentos dos três lados iguais;
// • Triângulo Isóscele: aquele que tem os comprimentos de dois lados iguais. Portanto, todo triângulo equilátero é
//também isóscele;
// • Triângulo Escaleno: aquele que tem os comprimentos de seus três lados diferentes.

let prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Digite o primeiro lado: "));
let lado2 = parseFloat(prompt("Digite o segundo lado: "));
let lado3 = parseFloat(prompt("Digite o terceiro lado: "));

if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2)
 {
    // É um triângulo válido
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triângulo Equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores informados não formam um triângulo.");
}


