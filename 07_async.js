// Event Loop

// const timeout = setTimeout(() => {
//    console.log('YO YO YO')
// }, 2300)

// clearTimeout(timeout)

// const interval = setInterval(() => {
//    console.log('YO YO YO')
// }, 1500)

// clearInterval(interval)

// const delay = (callback, wait = 1500) => {
//    setTimeout(callback, wait)
// }

// delay(() => {
//    console.log('Ayo Syo Fyo')
// }, 1500)

// const delay = (wait = 1000) => {
//    const promise = new Promise((resolve, reject) => {
//       setInterval(() => {
//          resolve()
//       }, wait)
//    })
//    return promise
// }

// delay(3000)
//    .then(() => {
//       console.log('after 3 sec')
//    })
//    .catch(err => console.error('Error: ', err))
//    .finally(() => console.log('finally'))

const delay = (wait = 1000) => {
   const promise = new Promise((resolve, reject) => {
      setInterval(() => {
         // resolve()
         reject('Something gonna wrong. Repeat later')
      }, wait)
   })
   return promise
}

// delay(3000)
//    .then(() => {
//       console.log('after 3 sec')
//    })
//    .catch(err => console.error('Error: ', err))
//    .finally(() => console.log('finally'))

const getData = () => new Promise(resolve => resolve([
   1, 1, 2, 3, 5, 8, 13
]))
// getData().then(data => console.log(data))

async function asyncExample() {
   try {
      await delay(2000)
      const data = await getData()
      console.log('Data', data)
   } catch (e) {
      console.log(e)
   } finally {
      console.log('FINALLY')
   }
}

asyncExample()