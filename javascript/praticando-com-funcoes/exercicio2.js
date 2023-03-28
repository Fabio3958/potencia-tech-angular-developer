// Crie uma funcao que verifica se você é maior de idade
function isMajor(age){
    if (age < 18)
        return 'Você é menor';
    else
        return 'Você é maior';
}

function main(){
    console.log(isMajor(18));
}

main();