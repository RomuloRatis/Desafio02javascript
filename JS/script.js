{
    let idade = 20;

    if(idade > 18){
        console.log("A idade é maior que dezoito")
    }else{
        console.log("Menor de idade");
    }

    let nome = "De maior";
    let condicaoHumana = true;

    if((nome) && (condicaoHumana)){
    console.log("É de maior e a condição é Humana")
    }else{
        console.log("É de menor e mutante");
    }

    let mes = "Janeiro";

    if((mes === "Dezembro" ) || (mes === "Janeiro")){
        console.log("Faz aniversario em Janeiro ou Dezembro")
    }else{
        console.log("Faz aniversário em julho");
    }

    let letra = "Rômulo";

    if(letra[0] === "R"){
        console.log("Nome começando com letra R")
    }else{
        console.log("Nome diferente, não contem a letra R no inicio")
    }

    let sobreNome = "Vainaweb";

    if((sobreNome.length >= 6) || (letra[0] === "E")){
        console.log("Sobre nome contem mais de seis letras")
    }else{
        console.log("Inválido")
    }

}   