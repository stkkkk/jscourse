const human = {
   race: 'european',
   location: 'Ukraine',
   languages: ['ua', 'en', 'pl'],
   age: 22,
   // 'complex key': 'Complex',
   // ['key_' + (5 + 5)]: 'Computed Key',
   name() {
      console.log('Yurii')
   }
}

// console.log(human.race)
// const ageKey = 'age'
// console.log(human[ageKey])
// console.log(human['complex key'])
// human.name()

// human.age++
// human.languages.push('de')
// // human['key_10'] = undefined
// delete human['key_10 ']

// console.log(human)

// const race = human.race
// const age = human.age
// const languages = human.languages
// const {race, age: hAge = 228, languages} = human

// console.log(race, hAge, languages)

// for (let item in human) {
//    if (human.hasOwnProperty(item)) {
//       console.log('key:', item)
//       console.log('value:', human[item])
//    }
// }

// const keys = Object.keys(human)
// keys.forEach((item) => {
// Object.keys(human).forEach((item) => {
//    console.log('key:', item)
//    console.log('value:', human[item])
// })


// Context