/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:

    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/*'Formas de pagamento:'
'1 - Débito'
'2 - Dinheiro ou Pix'
'3 - 2x no cartão'
'4 - Mais de 2x no cartão'*/


const fullPrice = 100;
const methodOfPayment = 4;
let modifiedPrice;

function applyDiscount(value, discount){
    return value - (value * (discount / 100));
}

function applyInterest(value, discount){
    return value + (value * (discount / 100));
}

if (methodOfPayment === 1){
    modifiedPrice = applyDiscount(fullPrice, 10)
    console.log('O total a pagar será: ' + modifiedPrice);
}
if (methodOfPayment === 2){
    modifiedPrice = applyDiscount(fullPrice, 15)
    console.log('O total a pagar será: ' + modifiedPrice);
}
if (methodOfPayment === 3){
    console.log('O total a pagar será: ' + modifiedPrice);
}
if (methodOfPayment === 4){
    modifiedPrice = applyInterest(fullPrice, 10)
    console.log('O total a pagar será: '+ modifiedPrice);
}

