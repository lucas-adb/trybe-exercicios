let salarioBruto = 3000;
let INSS;
let IR;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    INSS = 570.88;
};

// calculo do salarioBase

let salarioBase = salarioBruto - INSS

// calculo do IR

if (salarioBase <= 1903.98) {
    IR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = salarioBase * 0.075 - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    IR = salarioBase * 0.15 - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    IR = salarioBase * 0.225 - 636.13;
} else if (salarioBase > 4664.68) {
    IR = salarioBase * 0.275 - 869.36;
};

// calculo do salarioLiquido

let salarioLiquido = salarioBase - IR;

console.log(salarioBruto);
console.log(INSS);
console.log(salarioBase);
console.log(IR);
console.log(salarioLiquido);