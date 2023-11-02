/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis:
    1- Preço do etanol
    2- Preço da gasolina
    3- Tipo de combustível do seu carro
    4- Gasto médio de combustível do carro por KM
    5- Distância em KM da viagem

    Crie uma classe para representar carros.
    Os carros possuem marca, cor e gasto médio de combustível por quilômetro rodado.
    Crie um método que, dado a quantidade de quilômetros e preço do combustível, nos dê o valor gasto em reais para realizar este percurso.

*/

const precoGasolina = 5.69;
const precoEtanol = 3.64;
class Carro {
    constructor(marca, cor, KMporLitro) {
        this.marca = marca;
        this.cor = cor;
        this.KMporLitro = KMporLitro;
    }

    gastoPercurso(tipoCombustivel, distanciaKM) {
        let gasto;
        if(tipoCombustivel === "gasolina") {
            gasto = (distanciaKM / this.KMporLitro * precoGasolina).toFixed(2);
        } else if(tipoCombustivel === "etanol") {
            gasto = (distanciaKM / (this.KMporLitro * 0.7) * precoEtanol).toFixed(2); //O etanol tem por volta de 70% da eficiência da gasolina
        }
        console.log(`Serão gastos R$${gasto} com a viagem usando ${tipoCombustivel}.`);
    }
}

let carro1 = new Carro("Fiat", "preto", 10);
console.log(carro1);
carro1.gastoPercurso("gasolina", 100);
carro1.gastoPercurso("etanol", 100);

console.log("\n");

let carro2 = new Carro("Volkswagen", "azul", 15);
console.log(carro2);
carro2.gastoPercurso("gasolina", 100);
carro2.gastoPercurso("etanol", 100);