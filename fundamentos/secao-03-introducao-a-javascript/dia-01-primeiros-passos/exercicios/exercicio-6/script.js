let PecaXadrez = "Rainha";
let LowerCasePecaXadrez = PecaXadrez.toLowerCase();

switch (LowerCasePecaXadrez) {
    case "rei":
        console.log("O rei move do seu quadrado para qualquer quadrado vizinho adjacente")
        break;
    case "torre":
        console.log("A torre se move em linha verticalmente ou horizontalmente")
        break;
    case "bispo":
        console.log("O bispo se move pelas diagonais")
        break;
    case "rainha":
        console.log("A rainha se move como uma torre ou um bispo")
        break;
    case "cavalo":
        console.log("O cavalo pulo peças ao se mover e sempre se move em L")
        break;
    case "peão":
        console.log("O peão se move uma casa para frente ou duas no seu primeiro movimento")
        break;
}