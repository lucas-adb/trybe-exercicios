let notaNumerica = 70;
let notaLetra;

if (notaNumerica >= 90) {
    notaLetra = "A";
} else if (notaNumerica >= 80 && notaNumerica < 90) {
    notaLetra = "B";
} else if (notaNumerica >= 70 && notaNumerica < 80) {
    notaLetra = "C";
} else if (notaNumerica >= 60 && notaNumerica < 70) {
    notaLetra = "D";
} else if (notaNumerica >= 50 && notaNumerica < 60) {
    notaLetra = "E";
} else {
    notaLetra = "F";
}

console.log(notaLetra);