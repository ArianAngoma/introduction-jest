const {fetchAPI} = require('../src/callback');

test('Debería retornar la información de Goku', done => {
    const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku';

    fetchAPI(API, (error, data) => {
        try {
            expect(error).toBeNull();
            expect(data).not.toBeNull();
            expect(data.name).toBe('goku');
            done();
        } catch (err) {
            done(err);
        }
    })
})