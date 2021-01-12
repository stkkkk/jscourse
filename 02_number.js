// 1 NUMBER

// const num = 55
// const float = 55.44
// const pow = 13e10

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('pow 2^53-1', Math.pow(2, 53) - 1)
// console.log('max value', Number.MAX_VALUE)
// console.log('min value', Number.MIN_VALUE)
// console.log('positive infinity', Number.POSITIVE_INFINITY) // negative
// console.log('2 / 0', 2 / 0);
// console.log('NaN', Number.NaN) // Not a Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(isNaN(weird))
// console.log(Number.isNaN(45))
// console.log(Number.isFinite(75))
// console.log(Number.isFinite(Infinity))

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(Number.parseInt(stringInt) + 2);
// console.log(parseInt(stringInt) + 2);
// console.log(Number(stringInt) + 2);
// console.log(+stringInt + 2);
// console.log(Number.parseFloat(stringFloat) + 2);

// console.log(0.3 + 0.6); // 0.8999999999999999
// console.log((0.3 + 0.6).toFixed(5));
// console.log((0.3 + 0.6).toFixed(1));
// console.log(parseFloat((0.3 + 0.6).toFixed(1)));

// 2 BigInt
// console.log(typeof 90071992547409915555555n);
// console.log(90071992547409915555555n + 90071992547409915555555n);
// console.log(90071992547409915555555.22n);  // error
// console.log(10n - 5); // error ///// console.log(parseInt(10n) - BigInt(5))

// 3 Math
// console.log(Math.PI);
// console.log(Math.sqrt(121));
// console.log(Math.pow(11, 2));
// console.log(Math.abs(-11));
// console.log(Math.max(4, 6, 7, 11));
// console.log(Math.min(4, 6, 7, 11));
// console.log(Math.floor(10.6)); // найбільше ціле або менше рівне заданому
// console.log(Math.ceil(10.6)); // найменше ціле більше заданого числа
// console.log(Math.round(10.6)); // до найближчого цілого
// console.log(Math.trunc(10.6)); // відкидає дробову
// console.log(Math.random());

// Example
// function goRandom(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(goRandom(1, 100))