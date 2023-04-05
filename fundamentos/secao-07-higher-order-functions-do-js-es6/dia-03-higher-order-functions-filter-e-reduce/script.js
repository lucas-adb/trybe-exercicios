const numbers = [50, 85, -30, 3, 15];

const totalSum = numbers.reduce((acc, curr) => acc + curr);
console.log(totalSum);

const biggestNumber = numbers.reduce((acc, curr) => acc < curr ? curr : acc);
console.log(biggestNumber);

// soma números pares

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const filterEven = numbers2.filter((number) => number % 2 === 0);
const sumEven = filterEven.reduce((acc, curr) => acc + curr);
const sumEven2 = numbers2.reduce((acc, curr) => ((curr % 2 === 0) ? acc + curr : acc))

console.log(filterEven);
console.log(sumEven);
console.log(sumEven2);

// função com relatório que diz em qual matéria a pessoa foi melhor

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// const reduce = estudantes[0].materias.reduce((acc, curr) => (acc.nota > curr.nota) ? acc : curr);
// console.log(reduce);
const reduceParam = (acc, curr) => (acc.nota > curr.nota) ? acc : curr;
const report = estudantes.map((estudante) => ({
  name: estudante.nome,
  materia: estudante.materias.reduce(reduceParam).name,
}))
console.log(report);