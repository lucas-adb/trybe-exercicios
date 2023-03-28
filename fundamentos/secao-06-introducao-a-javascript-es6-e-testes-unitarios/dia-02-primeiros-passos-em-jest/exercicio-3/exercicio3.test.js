const { encode, decode } = require("./exercicio3");

describe('Testa se é uma função', () => {
    test('Verifica se a função encode existe', () => {
      expect(typeof encode).toBe('function');
    });
    test('Verifica se a função decode existe', () => {
        expect(typeof decode).toBe('function');
      })
  })

describe('Verifica se encode("aeiou") são convertidas em 1, 2, 3, 4 e 5', () => {
    test('encode("aeiou") é convertido para números', () => {
        expect(encode('aeiou')).toBe('12345');
    })
})

describe('Verifica se decode funciona', () => {
    test('decode("12345") deve retornar "aeiou"', () => {
        expect(decode('12345')).toBe('aeiou');
    })
})

describe('Verifica o parâmetro trem o mesmo tamanho que o retorno da função', () => {
    test('decode("12345").length deve retornar 5', () => {
        expect(decode('12345').length).toBe(5);
    })
    test('encode("aeiou").length deve retornar 5', () => {
        expect(encode('aeiou').length).toBe(5);
    })
})