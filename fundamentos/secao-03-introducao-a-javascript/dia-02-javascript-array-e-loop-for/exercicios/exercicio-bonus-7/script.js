let valor = 7;
let linha = "";
let asterisco = "*";
let espaco = " ";

let linha2 = ""

for (let index = 0; index <= valor / 2; index += 1) {
    linha = espaco.repeat((valor) / 2 - index) + asterisco.repeat(index);
    linha2 += asterisco;
    console.log(linha + linha2);
}

// if (valor + 1 / 2)