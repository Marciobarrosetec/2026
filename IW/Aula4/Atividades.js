// 1. Par ou Ímpar
let numero1 = Number(prompt("Digite um número:"));

if (numero1 % 2 === 0) {
  alert("O número é par.");
} else {
  alert("O número é ímpar.");

}

// 2. Verificação de Maioridade
let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
  alert("Você é maior de idade.");
} else {
  alert("Você é menor de idade.");
}

// 3. Contagem de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Contagem Regressiva
let numero2 = Number(prompt("Digite um número para a contagem regressiva:"));

while (numero2 >= 0) {
  console.log(numero2);
  numero2--;
}

// 5. Tabuada
let numero3 = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(numero3 + " x " + i + " = " + (numero3 * i));
}

// 6. Somatório
let numero4 = Number(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= numero4; i++) {
  soma += i;
}

alert("A soma de 1 até " + numero4 + " é " + soma);

// 7. Número Primo
let numero5 = Number(prompt("Digite um número:"));
let primo = true;

if (numero5 <= 1) {
  primo = false;
} else {
  for (let i = 2; i < numero5; i++) {
    if (numero5 % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  alert("O número é primo.");
} else {
  alert("O número não é primo.");
}

// 8. Login Simples
let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

while (usuario !== usuarioCorreto || senha !== senhaCorreta) {
  alert("Usuário ou senha incorretos. Tente novamente.");
  usuario = prompt("Digite o usuário:");
  senha = prompt("Digite a senha:");
}

alert("Login realizado com sucesso!");

// 9. Soma de Números Positivos
let total = 0;
let numero6 = Number(prompt("Digite um número positivo (negativo para parar):"));

while (numero6 >= 0) {
  total += numero6;
  numero6 = Number(prompt("Digite outro número positivo (negativo para parar):"));
}

alert("A soma total é " + total);

// 10. Adivinhação
let secreto = Math.floor(Math.random() * 10) + 1;
let palpite = Number(prompt("Adivinhe o número de 1 a 10:"));

while (palpite !== secreto) {
  if (palpite < secreto) {
    alert("O número secreto é maior.");
  } else {
    alert("O número secreto é menor.");
  }

  palpite = Number(prompt("Tente novamente:"));
}

alert("Parabéns! Você acertou.");

// 11. Cálculo de Fatorial
let numero7 = Number(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 1; i <= numero7; i++) {
  fatorial *= i;
}

alert("O fatorial de " + numero7 + " é " + fatorial);

// 12. Validação de Nota
let nota = Number(prompt("Digite uma nota de 0 a 10:"));

while (nota < 0 || nota > 10) {
  alert("Nota inválida. Digite novamente.");
  nota = Number(prompt("Digite uma nota de 0 a 10:"));
}

alert("Nota válida: " + nota);



// 13. Média de Notas
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

alert("Média: " + media);

if (media >= 7) {
  alert("Aprovado!");
} else {
  alert("Reprovado!");
}

// 14. Caixa Eletrônico
let valor = Number(prompt("Digite o valor do saque:"));

let ced100 = Math.floor(valor / 100);
valor %= 100;

let ced50 = Math.floor(valor / 50);
valor %= 50;

let ced20 = Math.floor(valor / 20);
valor %= 20;

let ced10 = Math.floor(valor / 10);
valor %= 10;

let ced5 = Math.floor(valor / 5);
valor %= 5;

let ced2 = Math.floor(valor / 2);
valor %= 2;

let ced1 = Math.floor(valor / 1);

alert(
  "Cédulas:\n" +
  "100: " + ced100 + "\n" +
  "50: " + ced50 + "\n" +
  "20: " + ced20 + "\n" +
  "10: " + ced10 + "\n" +
  "5: " + ced5 + "\n" +
  "2: " + ced2 + "\n" +
  "1: " + ced1
);

// 15. Números Ímpares
let numero8 = Number(prompt("Digite um número:"));

for (let i = 1; i <= numero8; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}