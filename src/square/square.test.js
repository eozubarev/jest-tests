const square = require('../square/square');

describe('validateValue', () => {
    let mockValue;
    beforeEach(() => { // Будет вызываться каждый раз при тесте
        // ДОБАВИТЬ В БД (НАПРИМЕР ПРОВЕРКА ДОБАВЛЕНИЯ пользователей)
    })

    beforeAll(() => { // Вызовется только 1 раз при тесте

    })

    test('square', () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5); // Число которое получили меньше чем 5
        // expect(square(2)).toBeGreaterThan(3); // Число больше чем 3
        // expect(square(2)).not.toBeUndefined(); // Число больше чем 3
        const spyMathPow = jest.spyOn(Math, 'pow'); // Замокали вложенный метод
        square(2);
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('square', () => {
        const spyMathPow = jest.spyOn(Math, 'pow'); // Замокали вложенный метод
        square(1);
        expect(spyMathPow).toBeCalledTimes(0) // Сколько раз вызывается метод pow
    })

    // МОКИ НАКАПЛИВАЮТ В СЕБЕ ВЫЗОВЫ и перед каждым или после теста нужно их очищать

    afterEach(() => { // Будет вызываться КАЖДЫЙ раз ПОСЛЕ теста
        jest.clearAllMocks()
        // УДАЛИТЬ ИЗ БД(НАПРИМЕР ПРОВЕРКА ДОБАВЛЕНИЯ пользователей)
    })
    afterAll(() => { // Будет вызываться 1 РАЗ ПОСЛЕ теста

    })
})