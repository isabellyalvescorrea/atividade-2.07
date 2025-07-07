//Escrever um algoritmo para determinar o consumo médio de um automóvel sendo fornecida a distância total
//percorrida pelo automóvel e o total de combustível gasto.

let prompt = require('prompt-sync')();

let distancia = parseFloat(prompt('digite a distancia percorrida: '));
let consumo = parseFloat(prompt('digite o consumo de combustivel: '));
let media = (distancia / consumo).toFixed(3);

console.log('a media de consumo é: ' + media + ' km/L');