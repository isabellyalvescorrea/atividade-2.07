//Faça um algoritmo que receba a idade de 75 pessoas e mostre mensagem informando “maior de idade” e “menor de
//idade” para cada pessoa. Considere a idade a partir de 18 anos como maior de idade.

let prompt = require('prompt-sync')();

let idades = 0;

for (let i=1; i<=75; i++){
    let idade = prompt('Escreva a sua ' + i + ' idade');
    let repeticao = (idades);

    if (repeticao >= 18) {
        idades++;

    
console.log('maior de idade');

}else{ (console.log('menor de idade')); }}