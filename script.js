
const sizes = document.querySelectorAll('.options--sizes__numbers .size')
const modal = document.querySelector('.modal')
const modalClose = modal.querySelectorAll('.modal__close img')
const details = document.querySelectorAll('.main-info__details')
const buttonBuy = document.querySelector('button')

let scrollPosition = 0;
let sizeSelected = 'M'
let selectedCode = 1;
let selectedQuantity = 1;
let selectedPrice = 99.90;
let selectedDescription = 'Kit 2 Camisas Urban Flex Jeans'


document.body.classList.remove('modal__open')
modal.classList.remove('modal')
modal.classList.add('hide')

details.forEach((detail) => {
  detail.addEventListener('click', () => {
    scrollPosition = window.pageYOffset;
    document.body.style.top = `-${scrollPosition}px`;
    window.scrollTo(0, scrollPosition);
    modal.classList.remove('hide')
    modal.classList.add('modal')
  })
})

modalClose.forEach((x) => {
  x.addEventListener('click', () => {
    modal.classList.remove('modal')
    modal.classList.add('hide')
    document.body.classList.remove('modal__open')
    document.body.style.top = '';
            
    // Restaura a posição do scroll
    window.scrollTo(0, scrollPosition);
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
    e.target.classList.add('selected')
    sizeSelected = e.target.textContent
    console.log(sizeSelected)
  })
})


function generatesJSON() {
  const product = {
    code: selectedCode,
    size: sizeSelected,
    quantity: selectedQuantity,
    price: selectedPrice,
    description: selectedDescription
  }

  const jsonProduct = JSON.stringify(product, null, 2)

  console.log(jsonProduct)

  const blob = new Blob([jsonProduct], { type: 'application/json' })

  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')

  //forma se quiser fazer o download do arquivo json
  // const link = document.createElement('a')
  // link.href = url
  // link.download = 'product.json'

  // document.body.appendChild(link)
  // link.click()

  // document.body.removeChild(link)
  // URL.revokeObjectURL(url)
}

buttonBuy.addEventListener('click', () => {
  generatesJSON()
})