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

// Adicione o código do exercício aqui:

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  // escreva aqui o seu código
  return books.find((book) => book.author.birthYear === 1947).author.name;
};

console.log(authorBornIn1947());

const getNamedBook = () => {
  // escreva seu código aqui
  return books.find((book) => (book.name).length === 26).name;
}

console.log(getNamedBook());

//

let expectedResult2 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  
  if ((books.every((book) => book.releaseYear >= 1901)) === true && (books.every((book) => book.releaseYear <= 2000))) {
    expectedResult2 = true
  }
  return expectedResult2;
}

console.log(everyoneWasBornOnSecXX());

//

const expectedResult3 = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  if ((books.some((book) => book.releaseYear < 1980)) === true && ((books.some((book) => book.releaseYear >= 1990)))) {
    expectedResult3 = false;
  }
  return expectedResult3;
}

//

let expectedResult4 = false;

const countEqual = (arrayBirthYear) => {
  for (let index = 0; index < arrayBirthYear.length; index += 1) {
    let current = arrayBirthYear[index];
    let next = arrayBirthYear[index + 1];
    if (current === next) {
      expectedResult4 = true;
      return expectedResult4;
    }
  }
  return expectedResult4;
}

const authorUnique = () => {
  // escreva seu código aqui
  const arrayBirthYear = [];
  books.forEach((book) => {
    arrayBirthYear.push(book.author.birthYear);
  })
  countEqual(arrayBirthYear);
}

authorUnique();