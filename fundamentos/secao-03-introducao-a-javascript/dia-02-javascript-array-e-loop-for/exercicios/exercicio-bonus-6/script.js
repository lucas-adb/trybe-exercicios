let valor = 5;
let asteriscos = "";
let asterisco = "*"; 

if (valor > 1) {
    for (let index = valor; index > 0; index -= 1) {
        asteriscos += asterisco;
        console.log(asteriscos);
    }
}