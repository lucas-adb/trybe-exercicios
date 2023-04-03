// const createEmail = (fullName) => {
//   return `${(fullName.toLowerCase()).replaceAll(' ', '_')}@trybe.com`;
// };

// const createEmployee = (fullName) => {
//   return {fullName, email: `${createEmail(fullName)}`};
// };

// const newEmployees = (createEmployee) => {
//   const employees = {
//     id1: createEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: createEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: createEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(createEmployee));

// Sorteador de loterias

// function generateNumber() { return Math.floor(Math.random() * (5 - 1) + (1)) };

// const CheckNumber = (number) => {
//   const lottery = generateNumber();
//   if (number === lottery) {
//     return 'Parabéns, você ganhou';
//   } else {
//     return 'Tente novamente';
//   }
// };

// console.log(CheckNumber(3));
// console.log(generateNumber());

// Corretor automático

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checkAnswers = (right, student) => {
//   let score = 0;
//   for (let index = 0; index < right.length; index += 1) {
//     if (student[index] === right[index]) {
//       score += 1;
//     } else if (student[index] === 'N.A') {
//       score += 0;
//     } else if (student[index] !== right[index]) {
//       score -= 0.5;
//     }
//   }
//   return score;
// }

const compare = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } else if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const count = (rightAnswers, studentAnswers, compareTwo) => {
  let score = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const compare = compareTwo(rightAnswers[index], studentAnswers[index]);
    score += compare;
  }
  return score
}

// console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS));
console.log(count(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));