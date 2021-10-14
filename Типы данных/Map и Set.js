/*
    Отфильтруйте анаграммы
    важность: 4
    Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

    Например:

    nap - pan
    ear - are - era
    cheaters - hectares - teachers
    Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

    Например:

    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
    Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

aclean = arr => {
    let set = new Set([])
    for (let word of arr) {
        word = word.toLowerCase().split('').sort().join('')
        set.add(word)
    }

    return set
}

console.log( aclean(arr) )