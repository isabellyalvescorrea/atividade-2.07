//Dados três valores A, B e C, em que A e B são números reais e C é um caractere, pede-se para imprimir o resultado
//da operação de A por B se C for um símbolo de operador aritmético; caso contrário deve ser impresso uma
//mensagem de operador não definido. Tratar erro de divisão por zero.

let A = 10, B = 0;
let operador = "/";

if (operador === "+") console.log(A + B);
else if (operador === "-") console.log(A - B);
else if (operador === "*") console.log(A * B);
else if (operador === "/") {
  if (B !== 0) console.log(A / B);
  else console.log("Erro: divisão por zero");
} else {
  console.log("Operador não definido");
}
