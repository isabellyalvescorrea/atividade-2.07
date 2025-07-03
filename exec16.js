//Escrever um algoritmo que leia o nome e as três notas obtidas por um aluno durante o semestre. Calcular a sua
//média (aritmética), informar o nome e sua menção aprovado (media >= 7), Reprovado (media <= 5) e Recuperação
//(media entre 5.1 a 6.9).

let prompt = require('prompt-sync')();
let nome = (prompt('qual é o seu nome? '));
let nota1 = parseFloat(prompt('digite a sua primeira nota obtida durante o semestre '));
let nota2 = parseFloat(prompt('digite a sua segunda nota '));
let nota3 = parseFloat(prompt('digite a sua terceira nota '));
let media = (nota1 + nota2 + nota3) / 3 ;

if (media >= 7){
console.log(nome + ' sua média esse semestre foi: ' + media + ' você foi aprovado'); 

}else if (media<=5){
console.log(nome + ' sua média esse semestre foi: ' + media + ' você foi reprovado');

}else{(media>5.1 && media<6.9)
    console.log(nome + ' sua média foi ' + media + ' você está de recuperação.');
};