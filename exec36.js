//36. Faça um algoritmo que calcule o valor da conta de luz de uma pessoa. Sabe-se que o cálculo da conta de luz segue
//a tabela abaixo:
//Tipo de Cliente Valor do KW/h
//  1 (Residência) 0,60
//  2 (Comércio) 0,48
//  3 (Indústria) 1,29

let prompt = require('prompt-sync')();

let tipo = parseFloat(prompt("Digite o tipo de cliente (1-Residência, 2-Comércio, 3-Indústria): "));
let consumo = parseFloat(prompt("Digite o consumo em KW/h: "));
let valorKW;

if (tipo === 1) valorKW = 0.60;
else if (tipo === 2) valorKW = 0.48;
else if (tipo === 3) valorKW = 1.29;
else valorKW = 0;

let total = consumo * valorKW;
console.log("Valor da conta de luz: R$ " + total.toFixed(2));
