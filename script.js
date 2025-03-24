const sizes = document.querySelectorAll('.options--sizes__numbers .size')
let sizeSelected
console.log(sizes)

function removeSelected() {
  sizes.forEach((size) => {
    size.classList.remove('selected');
  })
}

sizes.forEach((size) => {
  size.addEventListener('click', (e) => {
    sizes.forEach((otherSizes) => {
      otherSizes.classList.remove('selected')
    })
    sizeSelected = e.target.classList.add('selected')
  })
})
