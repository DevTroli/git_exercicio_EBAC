let peso = 90;
let altura = 1.90;
let nome = "Pablo";

// arrow function em TS usando a formula do IMC 
const IMC = (peso: number, altura: number) => {
    return peso / (altura * altura);
};

function StatusPeso(peso: number) {
    if (peso <= 18.5) {
        return "Abaixo do peso";
    }
    else if (peso > 18.5 && peso <= 25) {
        return "Peso ideal";
    }
    else if (peso > 25 && peso <= 30) {
        return "Sobrepeso";
    }
    else if (peso > 30 && peso <= 35) {
        return "Obesidade grau 1";
    }
    else if (peso > 35 && peso <= 40) {
        return "Obesidade grau 2";
    }
    else {
        return "Obesidade grau 3";
    }
}


// verificação da função IMC esta tudo e uso de toFixed para usoo de só duas casas decimais do total
console.log(nome + " sua altura é: " + altura + " de altura e sua peso é: " + peso + " kgs, logo seu IMC é " + IMC(peso, altura).toFixed(1));
console.log(StatusPeso(IMC(peso, altura)));

function Agredecimentos(nome: string) {
    return "olá " + nome + ", Obrigado por usar o nosso sistema para o calculo do seu IMC! Que você tenha um bom dia!";
}

console.log(Agredecimentos("Pablo"));