/*
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos:
    - Abaixo de 18.5 = abaixo do peso
    - Entre de 18.5 e 25 = peso normal
    - Entre 25 e 30 = acima do peso
    - Entre 30 e 40 = obeso
    - Acima de 40 = obesidade grave
*/

const peso = 80;
const altura = 1.80;

const IMC = (peso / (Math.pow(altura, 2))).toFixed(2);

console.log(`O IMC é ${IMC}.`);

if(IMC < 18.5) {
    console.log("Você está abaixo do peso!");
} else if(IMC >= 18.5 && IMC < 25) {
    console.log("Você está com o peso normal!");
} else if(IMC >= 25 && IMC < 30) {
    console.log("Você está acima do peso!");
} else if(IMC >= 30 && IMC < 40) {
    console.log("Você está obeso!");
} else if(IMC >= 40) {
    console.log("Você está com obesidade grave!");
}