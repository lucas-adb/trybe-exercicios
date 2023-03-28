const myRemove = require('./exercicio1');

describe('testa função myRemove', () => {
  test('Recebe myRemove([1, 2, 3, 4], 3 retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
  });
  test('Recebe myRemove([1, 2, 3, 4], 3 verifica se não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4])
  });
  test('Recebe myRemove([1, 2, 3, 4], 5 verifica se retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4])
  });
});
