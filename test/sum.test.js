const {sum} = require('../src/sum');

describe('Pruebas para sumar', () => {
    test('1 + 2 is 3', () => {
        expect(sum(1, 2)).toBe(3);
    })

    // También se puede hacer test con la palabra reservado it
    it('should return 3 with 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // Test para sumar un valor positivo y negativo
    test('1 + (-2) is -1', () => {
        expect(sum(1, -2)).toBe(-1);
    })

    // Test para sumar dos valores negativos
    test('-1 + (-2) is -3', () => {
        expect(sum(-1, -2)).toBe(-3);
    })
})