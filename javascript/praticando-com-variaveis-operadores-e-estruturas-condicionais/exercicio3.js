/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:

    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

console.log('Formas de pagamento:')
console.log('1 - Débito');
console.log('2 - Dinheiro ou Pix');
console.log('3 - 2x no cartão');
console.log('4 - Mais de 2x no cartão');
console.log();

const precoEtiqueta = 100;
const formaPagamento = 4;
let precoModificado;

if (formaPagamento === 1){
    precoModificado = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log('O total a pagar será: ' + precoModificado);
}
if (formaPagamento === 2){
    precoModificado = precoEtiqueta - (precoEtiqueta * 0.15)
    console.log('O total a pagar será: ' + precoModificado);
}
if (formaPagamento === 3){
    console.log('O total a pagar será: ' + precoEtiqueta);
}
if (formaPagamento === 4){
    precoModificado = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log('O total a pagar será: '+ precoModificado);
}

