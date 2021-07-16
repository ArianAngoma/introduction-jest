describe('Validación de email', () => {
    test('Esto es un email', () => {
        const email = 'arian@gmail.com';
        expect(email).toMatch(/\S+@\S+\.\S+/);
    });

    test('Esto NO es un email', () => {
        const email = 'ariangmail.com';
        expect(email).not.toMatch(/\S+@\S+\.\S+/);
    });
});