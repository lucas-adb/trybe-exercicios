let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de " + leitor['nome'] + " se chama " + '"' + leitor['livrosFavoritos'][0]['titulo'] + '"');

  console.log('---');

  leitor['livrosFavoritos'][1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

console.log(leitor['livrosFavoritos']);

console.log('---');

console.log('Julia tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');