// const car = 'bmw'
// const model = 'X6'
// const year = '2017'

// function getModel() {
//    return model
// }

// const output = `Це машина марки ${car}, моделі ${getModel()} і вона ${year > 2015 ? 'нова' : 'стара'}.`
// console.log(output);

// const dog = 'Pitbull'
// console.log(dog.length);
// console.log(dog.toUpperCase());
// console.log(dog.toLowerCase());
// console.log(dog.charAt(3));
// console.log(dog.indexOf('bull'));
// console.log(dog.startsWith('pit'));
// console.log(dog.toLowerCase().startsWith('pit'));
// console.log(dog.endsWith('bull'));
// console.log(dog.repeat(4));

// const string = '      Hello!        '
// console.log(string.trim());
// console.log(string.trimLeft());
// console.log(string.trimRight());


function logCat(h, name, age) {
   if (age < 1) {
      age = 'Incorrect age'
   }
   return `${h[0]}${name}${h[1]}${age}${h[2]}`
}

const catName = 'Kasia'
const catAge = 0

const output = logCat`Name: ${catName}, Age: ${catAge}!`
console.log(output);
