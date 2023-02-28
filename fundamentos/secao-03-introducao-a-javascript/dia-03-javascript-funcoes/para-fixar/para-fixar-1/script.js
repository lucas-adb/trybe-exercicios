let saldo;
let adicional;
let subtracao;
let multiplicacao;
let divisao;

function adicionaSaldo(saldo, adicional) {
    saldo = saldo + adicional; 
    return saldo;
}

console.log(adicionaSaldo(10,2));

function subtraiSaldo(saldo, subtracao) {
    saldo = saldo - subtracao; 
    return saldo;
}

console.log(subtraiSaldo(10,2));

function multiplicaSaldo(saldo, multiplicacao) {
    saldo = saldo * multiplicacao; 
    return saldo;
}

console.log(multiplicaSaldo(10,2));

function divideSaldo(saldo, divisao) {
    saldo = saldo / divisao; 
    return saldo;
}

console.log(divideSaldo(10,2));