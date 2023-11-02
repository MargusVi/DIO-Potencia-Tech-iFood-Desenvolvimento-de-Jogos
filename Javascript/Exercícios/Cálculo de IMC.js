/*
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos:
    - Abaixo de 18.5 = abaixo do peso
    - Entre de 18.5 e 25 = peso normal
    - Entre 25 e 30 = acima do peso
    - Entre 30 e 40 = obeso
    - Acima de 40 = obesidade grave

    Crie uma classe para representar pessoas.
    Pessoas têm nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor seu IMC.
    Instancie uma pessoa chamada José, com 70Kg e 1,75 de altura e peça José que diga o valor de seu IMC.
*/

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.IMC = Math.round((peso / (Math.pow(altura, 2))) * 100) / 100;
    }

    classificacaoIMC() {
        console.log(`Seu IMC é de ${this.IMC}`);
        if(this.IMC < 18.5) {
            console.log("Você está abaixo do peso!");
        } else if(this.IMC >= 18.5 && this.IMC < 25) {
            console.log("Você está com o peso normal!");
        } else if(this.IMC >= 25 && this.IMC < 30) {
            console.log("Você está acima do peso!");
        } else if(this.IMC >= 30 && this.IMC < 40) {
            console.log("Você está obeso!");
        } else if(this.IMC >= 40) {
            console.log("Você está com obesidade grave!");
        }
    }

    testeIMC(IMC) {
        if(IMC === this.IMC) {
            console.log("Parabéns! Você acertou seu IMC!");;
        } else {
            console.log("Você errou seu IMC.");
            this.classificacaoIMC();
        }
    }
}

const pessoa1 = new Pessoa("José", 70, 1.75);
console.log(pessoa1);
pessoa1.classificacaoIMC();
console.log("\n");
pessoa1.testeIMC(22.85);
console.log("\n");
pessoa1.testeIMC(22.86);