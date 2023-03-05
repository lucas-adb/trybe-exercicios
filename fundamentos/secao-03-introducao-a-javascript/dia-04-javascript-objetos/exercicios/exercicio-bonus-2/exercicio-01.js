function romansToNumeral(romans) {

    const guide = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let sumNumbers = 0;
    let current = 0;
    let next = 0;

    for (let index = 0; index < romans.length; index += 1) {
        current = guide[romans[index]];
        next = guide[romans[index + 1]];

        if (current < next && index + 1 < romans.length) {
            sumNumbers += next - current;
        } else if (current >= next && index + 1 < romans.length) {
            sumNumbers += current;
        }
    }

    return sumNumbers;

}

console.log(romansToNumeral('CIX'));