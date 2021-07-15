test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
});

test('Object validation', () => {
    const data = {username: 'Arian'};
    const data2 = {username: 'Andrea'};

    expect(data).toEqual({username: 'Arian'});
    expect(data).not.toEqual(data2);
})