/*
    Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

    - Média menor que 5, reprovação
    - Média entre 5 e 7, recuperação
    - Média maior que 7, aprovação
*/

const nota1 = 10;
const nota2 = 4;
const nota3 = 6;

const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

console.log(`A média do aluno é ${media}.`);

if(media < 5) {
    console.log("Reprovado!");
} else if(media >= 5 && media < 7) {
    console.log("Em recuperação");
} else if(media >= 7) {
    console.log("Aprovado!")
}