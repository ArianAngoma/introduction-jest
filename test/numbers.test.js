// toBeGreaterThan()
// toBeGreaterThanOrEqual()
// toBeLessThan()
// toBeLessThanOrEqual()
// toBe()
// toEqual()

test('2 + 2', () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test('Números flotantes', () => {
    const value = 0.1 + 0.3;

    expect(value).toBeCloseTo(0.4);
})