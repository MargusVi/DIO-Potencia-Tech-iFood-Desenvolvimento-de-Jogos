// Crie um programa que dado um número imprima sua tabuada

function tabuada(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

tabuada(2);