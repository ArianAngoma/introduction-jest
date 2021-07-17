const {getData} = require('../src/promise');
const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku';

test('Debería retornar información de goku', async () => {
    const {name} = await getData(API);
    return expect(name).toBe('goku');
})

test('Debería fallar por url invalida', async () => {
    expect.assertions(1);
    try {
        const {name} = await getData('url invalida');
        return expect(name).toBe('goku');
    } catch (err) {
        expect(err).not.toBeNull();
    }
})