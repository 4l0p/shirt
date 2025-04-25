const elementoAlvo = document.getElementById('elemento-que-aparece');
const elementoMarcador = document.getElementById('elemento-referencia');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Quando o marcador começa a sair da viewport pelo topo (rolagem para baixo)
    if (entry.boundingClientRect.top < 0) {
      elementoAlvo.style.display = 'flex';
    } 
    // Quando o marcador está totalmente visível novamente (rolagem para cima)
    else if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
      elementoAlvo.style.display = 'none';
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: [0, 1] // Observa quando entra/sai completamente
});

observer.observe(elementoMarcador);