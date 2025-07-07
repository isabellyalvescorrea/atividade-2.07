//Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar
//(US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o
//usuário.

let prompt = require('prompt-sync')();

let dolar = parseFloat(prompt('digite a quantidade de US$ que você deseja converter: '));
let cotacao = parseFloat(prompt('digite a cotação do dolar: '));
let real = (dolar * 5.42).toFixed(2);
console.log('o valor em US$ equivale a: ' + 'R$ ' + real);