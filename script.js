
const sizes = document.querySelectorAll('.options--sizes__numbers .size')
const modal = document.querySelector('.modal')
const modalClose = modal.querySelectorAll('.modal__close img')
const details = document.querySelectorAll('.main-info__details')
let sizeSelected;
console.log(modalClose)

document.body.classList.remove('modal__open')
modal.classList.remove('modal')
modal.classList.add('hide')

details.forEach((detail) => {
  detail.addEventListener('click', () => {
    modal.classList.remove('hide')
    modal.classList.add('modal')
    document.body.classList.add('modal__open')
  })
})

modalClose.forEach((x) => {
  x.addEventListener('click', () => {
    modal.classList.remove('modal')
    modal.classList.add('hide')
    document.body.classList.remove('modal__open')
  })
})

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
