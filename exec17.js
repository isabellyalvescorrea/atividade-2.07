//Ler 80 números e ao final informar quantos números estão no intervalo entre 10 (inclusive) e 150 (inclusive).

let prompt = require('prompt-sync')();

let numeros = 0;

for (let i=1; i<=80; i++){
    let numero = prompt('Escreva o ' + i + ' numero');
    let repeticao = Number(numero);

    if (repeticao >= 10 && repeticao <=150 ){
        numeros++;

    }
}console.log('quantidade de numeros no intervalo entre 10 e 150: '+ numeros);