const myFizzBuzz = require('./exercicio2');

describe('executa myFizzBuzz() com um número divisível por 3 e 5', () => {
  test('myFizzBuzz(15) > deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
})

describe('executa myFizzBuzz() com um número divisível por apenas 3', () => {
  test('myFizzBuzz(9) > deve retornar fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
})

describe('executa myFizzBuzz() com um número divisível por apenas 5', () => {
  test('myFizzBuzz(25) > deve retornar buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
})

describe('executa myFizzBuzz() com um número não divisível por 3 e 5', () => {
  test('myFizzBuzz(7) > deve retornar num, ou 7, neste caso', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
})

describe('executa myFizzBuzz() com um parâmetro que não é número', () => {
  test('myFizzBuzz("xablau") > deve retornar false', () => {
    expect(myFizzBuzz('xablau')).toBe(false);
  });
})