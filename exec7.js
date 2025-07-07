//Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é:
//F=(9*C+160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

let prompt = require('prompt-sync')();

let temperatura = parseFloat(prompt('digite a temperatura em graus celcius: '));
//aplica a formula de conversão de celcius para fahrenheit
// F=(9*C+160)/5
let conversao = (temperatura * 9 + 160)/5
console.log('a temperatura em fahrenheit é: ' + conversao + ' F ');
