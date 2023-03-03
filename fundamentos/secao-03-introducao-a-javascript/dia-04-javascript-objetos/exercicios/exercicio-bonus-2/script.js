
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

    for (let index = 0; index < romans.length; index + 1) {
        let current = guide[romans[index]];
        let next = guide[romans[index + 1]];

        if (current > next) {
            sumNumbers += current + next;
        } else if (current < next) {
            sumNumbers += next - current;
        } else {
            sumNumbers += current;
        }
    }

    return sumNumbers;

}


// function romansToNumeral(romans) {
//     const guide = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000
//     }
  
//     let sumNumbers = 0;
//     for (let i = 0; i < romans.length; i++) {
//       let current = guide[romans[i]];
//       let next = guide[romans[i + 1]];
//       if (next > current) {
//         sumNumbers += next - current;
//         i++;
//       } else {
//         sumNumbers += current;
//       }
//     }
  
//     return sumNumbers;
//   }
  
  console.log(romansToNumeral('VI')); // Output: 6
  
