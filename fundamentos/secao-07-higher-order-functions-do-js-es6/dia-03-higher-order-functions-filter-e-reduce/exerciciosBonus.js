// exercicio 1

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// const flatten = (arrays) => {
//   return arrays.reduce((acc, curr) => {
//     return acc.concat(curr);
//   }, []);
// }

// console.log(flatten(arrays));

// dados

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// exercicio 2

const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  // return books.map((book) => book.author.name);
  // return books.reduce((acc, curr) => acc + `${curr.author.name}, `, '');
  return books.reduce((acc, curr, index) => {
    if (index === books.length - 1) {
      return acc + `${curr.author.name}.`;
    } else {
      return acc + `${curr.author.name}, `;
    }
  }, '');
}

console.log(reduceNames());

const expectedResult3 = 43;

// exercicio 3

const averageAge = () => {
  const birthYearSum = books.reduce((acc, curr) => acc + curr.author.birthYear, 0);
  const releaseYearSum = books.reduce((acc, curr) => acc + curr.releaseYear, 0);
  const birthYearAverage = (releaseYearSum - birthYearSum) / books.length;
  return birthYearAverage;
}

console.log(averageAge());

// exercicio 4

const expectedResult4 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => {
  // retorne seu código aqui
  const longestName = books.reduce((acc, curr) => acc < curr.name.length ? curr : acc, 0);
  return longestName;
}

console.log(longestNamedBook());