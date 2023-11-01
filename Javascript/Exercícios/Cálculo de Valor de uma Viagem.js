/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis:
1- Preço do combustível
2- Gasto médio de combustível do carro por KM
3- Distância em KM da viagem
*/

const precoCombustivel = 5.82;
const KMporLitro = 10;
const distanciaKM = 100;

const valor = (distanciaKM / KMporLitro * precoCombustivel).toFixed(2)

console.log((`O valor gasto com combustível para essa viagem é de R$${valor}`));