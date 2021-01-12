const hw = document.getElementById('yoyo')
// const hw2 = document.getElementsByTagName('h2')[0]
// const hw2 = document.getElementsByClassName('h2')
// const hw2 = document.querySelector('.h2-class')
// const hw2 = document.querySelector('#yoyo2') // allways 1 element
const hw2 = document.querySelector('h2')
console.log(hw2)

setTimeout(() => {
   addStylesTo(hw)
}, 3000);

function addStylesTo(node) {
   node.textContent = 'Changed from JS'
   node.style.color = 'green'
   node.style.textAlign = 'center'
   node.style.backgroundColor = 'yellow'
   node.style.padding = '2rem'
}