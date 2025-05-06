
const sizes = document.querySelectorAll('.options--sizes__numbers .size')
const mainButton = document.getElementById('main-button')
const deskButton = document.getElementById('desk-button')
const mobileButton = document.getElementById('mobile-button')

let scrollPosition = 0;
let sizeSelected = 'M'
let selectedCode = 1;
let selectedQuantity = 1;
let selectedPrice = 99.90;
let selectedDescription = 'Kit 2 Camisas Urban Flex Jeans'

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

  if (product.size == '') {
    alert('Selecione o Tamanho!')
  } else {

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
}

buttonBuy = [mainButton, deskButton]

buttonBuy.forEach((buttonTarget) => {
  buttonTarget.addEventListener('click', () => {
    generatesJSON()
  })
})

// //mover a pagina para seção de comprar
// document.getElementById('addToBag').addEventListener('click', () => {
//   document.getElementsByClassName('main-photo')[0].scrollIntoView({ behavior: 'smooth' })
// })

// Scroll para seção de comprar - versão corrigida
mobileButton.addEventListener('click', (e) => {
  e.preventDefault(); // Previne comportamento padrão se for um link
  document.getElementsByTagName('body')[0].scrollIntoView({
    behavior: 'smooth',
    block: 'start' // Alinha ao topo da viewport
  });
});