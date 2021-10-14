/*
    Случайное целое число от min до max
    важность: 2
    Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

    Любое число из интервала min..max должно появляться с одинаковой вероятностью.

    Пример работы функции:

    alert( randomInteger(1, 5) ); // 1
    alert( randomInteger(1, 5) ); // 3
    alert( randomInteger(1, 5) ); // 5
*/

randomInteger = (min, max) => {
    let res

    const generateInteger = () => String(Math.random()).split('')[2]

    for (;true;) {
        res = generateInteger()

        if (max >= res >= min) {
            return res
        }
    }
}

console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5
