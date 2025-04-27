const elementoAlvo = document.querySelector('.float-desk');
const elementoAlvoMobile = document.querySelector('.float-mobile__button');
const elementoMarcador = document.getElementById('elemento-referencia');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Quando o marcador começa a sair da viewport pelo topo (rolagem para baixo)
    if (entry.boundingClientRect.top < 0) {
      elementoAlvo.style.display = 'flex';
      elementoAlvoMobile.style.display = 'block'
    } 
    // Quando o marcador está totalmente visível novamente (rolagem para cima)
    else if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
      elementoAlvo.style.display = 'none';
      elementoAlvoMobile.style.display = 'none';
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: [0, 1] // Observa quando entra/sai completamente
});

observer.observe(elementoMarcador);