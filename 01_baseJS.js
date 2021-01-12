//1 var const let
// const firstName = 'Yurii'
// const age = '22'

// name = Yuriii

//2 mutirovannya

// console.log('Name: ' + firstName + ', age = ' + age)

// const lastName = prompt('Entet your lastname')
// alert(firstName + ' ' + lastName)

//3 operators

// let currentYear = 2020
// const birhtYear = 1997

// const age = currentYear - birhtYear

// const a = 20
// const b = 10

// let c = 50
// c = a + c ==== c += a

// console.log(a*b)
// console.log(a/b)
// console.log(a+b)
// console.log(a-b)
// console.log(currentYear++)
// console.log(currentYear++)
// console.log(++currentYear)

// 4 Data types

// const isProgrammer = true
// const name = 'Yurii'
// const age = 22
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Operator priority

// const fullAge = 22
// const birhtYear = 1997
// const currentYear = 2020

// const isFullAge = currentYear - birhtYear >= fullAge

// console.log(isFullAge)

// 6

// const courseStatus = 'ready' // ready failed pending

// if (courseStatus === 'ready') {
//    console.log('Course is ready and you can start it!')
// } else if (courseStatus === 'pending') {
//    console.log('Not yet!')
// } else {
//    console.log('You cant start it coz course is failed!')
// }


// const isReady = true

// if (isReady) {
//    console.log('Its ready!')
// } else {
//    console.log('Its not ready!')
// }

// ternary operator
// isReady ? console.log('Its ready!') : console.log('Its not ready!')


//7 Functions

// function calculateAge(year) {
//    return 2020 - year
// }

// console.log(calculateAge(1997))

// function logInfoAbout(name, year) {
//    const age = calculateAge(year)

//    if (age > 0) {
//     console.log('Its ' + name + ' and he`s ' + age + ' years old!')
//    } else {
//       console.log('Incorrect year!')
//    }
// }

// logInfoAbout('Yurii', 1997)

// 9  Massifs

// const animals = ['Cat', 'Dog', 'Fish']
// // const animals = new Array('Cat', 'Dog', 'Fish')
// console.log(animals)
// console.log(animals[2])


// animals[3] = 'Horse'
// animals[animals.length] = 'Chick'
// console.log(animals)

// 10 Cycles

// const animals = ['Cat', 'Dog', 'Fish', 'Chicken']

// // for (let i = 0; i < animals.length; i++) {
// //    const animal = animals[i]
// //    console.log(animal)
// // }

// for (let animal of animals) {
// console.log(animal)
// }

// 11 Objects

const person = {
   firstName: 'Yurii',
   lastName: 'Stetsyk',
   year: 1997,
   languages: ['ua', 'eng', 'rus'],
   hasWife: false,
   greet: function () {
      console.log('greet from person')
   }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.greet()
person.hasDog = false
console.log(person)
