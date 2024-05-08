// 1.	Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и
// возвращает строку этих чисел в виде номера телефона.
// Формат номера телефона должен соответствовать "(xxx) xxx-xxxx".
function phoneNumber(array) {
    if (array.length !== 10 && array.every(function (num) { return num >= 0 && num <= 9; }))
        return undefined;
    return '(' + array.slice(0, 3).join('') + ') ' + array.slice(3, 6).join('') + '-' + array.slice(6, 10).join('');
}
alert(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
// 2.	Если перечислить все натуральные числа до 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
// Завершите метод так, чтобы он возвращал сумму всех чисел, кратных 3 или 5, меньше переданного числа.
//     Кроме того, если число отрицательное, верните 0.
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number >= 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 3; i <= number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
alert(Challenge.solution(10));
//Сдвиг массива в право
function shift(array, k) {
    if (k == array.length + 1)
        return array;
    while (k > array.length + 1) {
        k = k - array.length + 1;
    }
    return (array.splice(array.length - k, array.length)).concat(array.slice(0, k));
}
alert(shift([1, 2, 3, 4, 5, 6, 7, 8], 3));
//вернуть медиану массивов
function median(num1, num2) {
    num1 = num1.concat(num2).sort();
    if (num1.length % 2 == 0) {
        return (num1[num1.length / 2] + num1[num1.length / 2 - 1]) / 2;
    }
    else {
        return num1[Math.ceil(num1.length / 2 - 1)];
    }
}
alert(median([3], [2, 1]));
