let prompt = require('prompt-sync')();

let dolar = parseFloat(prompt('digite a quantidade de US$ que você deseja converter: '));
let cotacao = parseFloat(prompt('digite a cotação do dolar: '));
let real = (dolar * 5.42).toFixed(2);
console.log('o valor em US$ equivale a: ' + 'R$ ' + real);