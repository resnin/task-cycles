/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let i;
    for (i = 0; start <= end; start++) {
        if (start % 2 == 0) {
            i = i + start;
        }
    }
    return i;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let j = 0;
    while (a > 0.1) {
        a = a / 2;
        j++;
    }
    return j;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let result = '';
    let k = 0;
    do {
        if ((k + 1) % 3 === 0) {
            result += '_';
        } else {
            result += message[k];
        }
        k++;
    } while (k < message.length);
    return result;
}
