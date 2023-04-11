const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [student1, [ student2, student3 ], [student4, student5 ]] = moreStudents;
const spread = [moreStudents[0], ...moreStudents[1], ...moreStudents[2]];

console.log(student1, student2, student3, student4, student5);
console.log(spread);