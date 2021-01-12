// 1 Functions

// Function Declaration
// function greet(car) {
//    console.log('Elon have a new', car)
// }

// Function Expression
// const greet2 = function (name) { // function greet2(name)
//    console.log('Musk have a new', name)
// }

// greet('Model Y')
// greet2('Dragon Crew')

// console.log(greet);
// console.dir(greet);


// 2 Anonimus function

// let counter = 0
// const interval = setInterval(function () {
//    if (counter === 10) {
//       clearInterval(interval)
//    } else {
//       console.log(++counter)
//    }
// }, 1000)


// 3 Arrow function

// function greet(car) {
//    console.log('Elon have a new', car)
// }

// const arrow = (car) => {
//    console.log('Elon have a new', car)
// }

// const arrow2 = car => console.log('Elon have a new', car)

// arrow('Model 3')
// arrow2('Model X')

// // const pow2 = num => {
// //    return num ** 2
// // }
// const pow2 = num => num ** 2
// console.log(pow2(6))


// 4 Default params

// const sum = (a, b = a * 2) => a + b
// console.log(sum(13, 4))
// console.log(sum(13))

// function sumAll(...all) {
//    let result = 0
//    for (let num of all) {
//       result += num
//    }
//    return result
// }
// const res = sumAll(1, 2, 3, 4)
// console.log(res)


// 5 Closure

function createMember(name) {
   return function (lastName) {
      console.log(name + lastName)
   }
}

const logWithLastName = createMember('Yurii ')
console.log(logWithLastName('Stetsyk'));
console.log(logWithLastName('Yoyo'));
