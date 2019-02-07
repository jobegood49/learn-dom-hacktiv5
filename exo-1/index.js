let elem = document.getElementById('fill-me')
elem.innerHTML = 'HAlo!'

let pTags = document.getElementsByClassName('change-all-of-me')
// console.log(pTags, 'is pTags an array???')
// console.log(typeof pTags)
// pTags.forEach(currentItem => {})(pTag => {
//   return (pTag.innerHTML = 'HALO JUga!')
// })

// for (let key in pTags) {
//   console.log(key)
// }

for (let i = 0; i < pTags.length; i++) {
  pTags[i].innerHTML = 'HALO JUga!'
}
