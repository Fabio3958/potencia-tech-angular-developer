// dedclaração de função: function nomeDaFuncao(){}

// função para entender o funcionamento
function teste() {
    console.log('teste');
}
teste();

// função para entender o que é parâmetro
function sayMyName(name) {
    console.log('Olá, ' + name);
}
sayMyName('Fábio');

// exemplo básico de funçãp
function incrementarJuros(valor, percentualJuros) {
    const valorAcrecimo = (percentualJuros / 100) * valor;
    return valor + percentualJuros;
}
console.log(incrementarJuros(100, 10));

// transformando problemas anteriores em funções
function calcularImc(peso, altura){
const imc = peso / Math.pow(altura, 2);
return imc;
}

function classificarImc(imc){
    if (imc < 18.5)
        return('Abaixo do peso');
    else if (imc < 25)
        return('Peso normal');
    else if (imc < 30)
        return('Acima do peso');
    else if (imc < 40)
        return('Obesidade');
    else
        return('Obesidade grave');
}

// principal função do programa, estará o "código bruto"
// Os paranteses que cercam a função a torna uma função imediatamente invocada (não precisa de nome)
(function (){

    const imc = calcularImc(55, 1.7);
    console.log(imc.toFixed(2));
    console.log(classificarImc(imc));

})();


// Função se torna um valor e pode ser atribuído a uma variável
/*
console.log(main);
const main2 = main;
main2();
*/

// Função pode ser reatribuída
/*
main = function(){
    console.log(1);
}
*/
