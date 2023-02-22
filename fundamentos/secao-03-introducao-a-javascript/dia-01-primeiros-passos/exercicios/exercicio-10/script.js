let valorCusto = 10;
let valorVenda = 50;
let impostoSobreOCusto = valorCusto * 0.20;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if (valorVenda < 0 || valorCustoTotal < 0) {
    console.log("erro");
} else {
    console.log("Seu lucro foi de " + lucro + ".");
}

