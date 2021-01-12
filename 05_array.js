const cars = ['BMW', 'Mercedes', 'Rolls Royce', 'Bentley']
const fib = [1, 1, 2, 3, 5, 8, 13, 21]
// const people = [
//    { name: 'Yurii', kids: 0 },
//    { name: 'Vasya', kids: 3 },
//    { name: 'Maria', kids: 2 },
// ]
// console.log(people);


// Method
// cars.push('Porsche')
// cars.unshift('Lada')
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('Mercedes')
// const index = cars.findIndex('Mercedes')
// cars[index] = 'Porsche'
// console.log(cars)

// const index = people.findIndex(function (person) {
//    return person.kids === 2
// })
// console.log(people[index])

// const person = people.find(function (person) {
//    return person.kids === 3
// })
// console.log(person)

// let findPerson
// for (const person of people) {
//    if (person.kids === 0) {
//       findPerson = person
//    }
// }
// console.log(findPerson)

// const person = people.find(person => person.kids === 2)
// console.log(person)

// console.log(cars.includes('BMW'))

// const upperCar = cars.map(car => {
//    return car.toUpperCase()
// })
// console.log(upperCar)

// const powFib = fib.map(fiba => fiba ** 2)

const pow1 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)
// // const powFib = fib.map(pow1).map(sqrt)//.map(Math.sqrt)
// // console.log(powFib)

// const powFib = fib.map(pow1)
// const filteredNum = powFib.filter(num => {     // num > 20)
//    return num > 20
// })
// console.log(filteredNum)

// Exercise 1
// const sentence = 'Hello, my name is Yurii'
// const reverseSentence = sentence.split('').reverse().join('')
// console.log(reverseSentence);

const people = [
   { name: 'Yurii', BTC: 14 },
   { name: 'Vasya', BTC: 23 },
   { name: 'Maria', BTC: 7 },
]
const sumBtc = people
   .filter(person => person.BTC > 10)
   .reduce(function (acc, person) {
   acc += person.BTC
   return acc
}, 0)

console.log(sumBtc)