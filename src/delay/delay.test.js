const delay = require('../delay/delay');


describe('validateValue', () => {
    test('Корректное значение', async () => {
        const sum = await delay(() => 5 + 5, 1000)
        expect(sum).toBe(10)
    })
})