let inputNumber = 7;
let totalDivisors = 2;

for (let divisor = 2; divisor < inputNumber; divisor += 1) {
    if (inputNumber % divisor === 0) { totalDivisors += 1; } 
}

if (totalDivisors > 2) {
    console.log(inputNumber + " não é primo");
} else { 
    console.log(inputNumber + " é primo");
}