//Faça um algoritmo que receba um número e diga se este número está no intervalo entre 100 e 200.

let prompt = require ('prompt-sync')();

let numero1 = parseFloat(prompt('Digite um numero: '));
if (numero1 > 99 && numero1 < 201){
console.log('o numero ' + numero1 + ' está entre 100 e 200');

}else{ 
console.log('o numero ' + numero1 + ' não está entre 100 e 200)');
};
 

