const mapArrToString = require('../mapArrToSring/mapArrToString');

describe('mapArrToString', () => {
    test('Корректное значение', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('Разные значения, не только числа', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, false, 'afdsaf'])).toEqual(['1', '2', '3']);
    })
    test('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([]);
    })
    test('Отрицание', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    })
})

// Для сравнения только содержимого используется метод toEqual (Массивы и объекты сравниваются по ссылке)