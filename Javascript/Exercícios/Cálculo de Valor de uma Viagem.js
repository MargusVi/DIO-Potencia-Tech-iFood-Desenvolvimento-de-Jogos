/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis:
1- Preço do etanol
2- Preço da gasolina
3- Tipo de combustível do seu carro
4- Gasto médio de combustível do carro por KM
5- Distância em KM da viagem
*/


const precoGasolina = 5.69;
const precoEtanol = 3.64;
const tipoCombustivel = "etanol";
const KMporLitro = 10;
const distanciaKM = 100;

let valor = 0;

if(tipoCombustivel === "gasolina") {
    valor = (distanciaKM / KMporLitro * precoGasolina).toFixed(2)
} else if(tipoCombustivel === "etanol") {
    valor = (distanciaKM / (KMporLitro * 0.7) * precoEtanol).toFixed(2) //O etanol tem por volta de 70% da eficiência da gasolina
}

console.log((`O valor gasto com combustível para essa viagem é de R$${valor}`));