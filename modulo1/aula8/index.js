/*
Jhuan lucas dos Santos tem 15 anos, pesa 67 kg
tem 1.85 de altura e seu IMC é de 19.576333089846603
Jhuan lucas nasceu em 2008
*/
const nome = 'Jhuan Lucas';
const sobrenome = 'dos Santos';
const idade = 15;
const peso = 74;
const alturaEmM = 1.85;
let indiceMassaCorporal;  // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);




