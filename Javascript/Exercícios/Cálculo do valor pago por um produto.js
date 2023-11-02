/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para efetuar o cálculo de acordo com a opção de pagamento:

    - Débito à vista = 10% de desconto
    - Dinheiro ou PIX à vista = 15% de desconto
    - Em 2 vezes = preço normal
    - Mais de 2 vezes = 10% de juros
*/

function precoProduto(preco, pagamento) {
    let valor = 0;

    if(pagamento === "debito") {
        valor = (preco - (preco * 10/100)).toFixed(2);
    } else if(pagamento === "dinheiroPix") {
        valor = (preco - (preco * 15/100)).toFixed(2);
    } else if(pagamento === "2vezes") {
        valor = preco.toFixed(2);
    } else if(pagamento === "maisParcelas") {
        valor = (preco + (preco * 10/100)).toFixed(2);
    }

    console.log(`Seu produto sairá a R$${valor}.`);
}

precoProduto(10, 'debito');
precoProduto(10, 'dinheiroPix');
precoProduto(5, '2vezes');
precoProduto(7, 'maisParcelas');