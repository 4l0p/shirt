const modal = document.querySelector('.modal')
const modalClose = modal.querySelectorAll('.modal__close img')
const details = document.querySelectorAll('.main-info__details')
const modalTitle = document.querySelector('.modal__title h1')
const modalContent = document.querySelector('.modal__text')

const content = {
  details:` <div class='modal__text--title'>
              detalhes
            </div>
            <ul>
              <li>Gênero: Masculino.</li>
              <li>Cor: Azul Claro e Azul Escuro.</li>
              <li>Material: Mistura de Algodão e Jeans.</li>
              <li>Modelagem: Slim Fit.</li>
              <li>Estação: Versátil.</li>
              <li>Colarinho: Clássico.</li>
              <li>Manga: Longa.</li>
              <li>Padrão: Jeans.</li>
              <li>Ocasião: Versátil.</li>
            </ul>`,
  measure: `<div class="modal__text--title">
                    tabela
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Tamanho</th>
                            <th>Peito</th>
                            <th>Ombro</th>
                            <th>Comprimento</th>
                            <th>Manga</th>
                        </tr>
                        <tr>
                            <th>PP</th>
                            <td>96 cm </td>
                            <td>42 cm </td>
                            <td>69 cm </td>
                            <td>63 cm</td>
                        </tr>
                        <tr>
                            <th>P</th>
                            <td>100 cm </td>
                            <td>44 cm </td>
                            <td>70 cm </td>
                            <td>64 cm </td>
                        </tr>
                        <tr>
                            <th>M</th>
                            <td>104 cm </td>
                            <td>46 cm </td>
                            <td>71 cm </td>
                            <td>65 cm</td>
                        </tr>
                        <tr>
                            <th>G</th>
                            <td>108 cm </td>
                            <td>48 cm </td>
                            <td>72 cm </td>
                            <td>66 cm</td>
                        </tr>
                        <tr>
                            <th>XG</th>
                            <td>112 cm</td>
                            <td>50 cm</td>
                            <td>73 cm</td>
                            <td>67 cm</td>
                        </tr>
                        <tr>
                            <th>XGG</th>
                            <td>116 cm</td>
                            <td>52 cm</td>
                            <td>74 cm</td>
                            <td>68 cm</td>
                        </tr>
                    </tbody>
                </table>`,
  payment: `<div class="modal__payments">
              <div class='modal__text--title'>
                cartões de crédito
              </div>
              <ul>
                <li> <img src="./assets/visa_modal.png"> Visa </li>
                <li> <img src="./assets/master_modal.png"> Master Card </li>
                <li> <img src="./assets/elo_modal.png"> Elo </li>
              </ul>
              <div class="modal__text--title">
                Outras opções de pagamentos
              </div>
              <ul>
                <li> <img src="../assets/pix.png"> Pix </li>
              </ul>
              <p>
                Tenha em atenção que termos e condições de terceiros podem aplicar-se no caso de Formas de pagamento adicionais. 
                Certifique-se de que lê estes termos cuidadosamente na finalização da compra antes de utilizar Formas de pagamentos adicionais.
              </p>
            </div>
  `
}



document.body.classList.remove('modal__open')
modal.classList.remove('modal')
modal.classList.add('hide')

details.forEach((detail, index) => {
  detail.addEventListener('click', (e) => {
    scrollPosition = window.pageYOffset;
    document.body.style.top = `-${scrollPosition}px`;
    window.scrollTo(0, scrollPosition);
    modal.classList.remove('hide')
    modal.classList.add('modal')
    if(index === 0) {
      modalTitle.innerText = "Detalhes do Produto";
      modalContent.innerHTML = content.details;
    }
    if(index === 1) {
      modalTitle.innerText = "Medidas";
      modalContent.innerHTML = content.measure;
    }
    if(index === 2) {
      modalTitle.innerText = "Opções de Pagamento";
      modalContent.innerHTML = content.payment;
    }
    console.log(`Item clicado: ${e.target.textContent}`)
    console.log(`index: ${index} `)
    //document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
  })
})

modalClose.forEach((x) => {
  x.addEventListener('click', () => {
    modal.classList.remove('modal')
    modal.classList.add('hide')
    document.body.classList.remove('modal__open')
            
    // Restaura a posição do scroll
    window.scrollTo(0, scrollPosition);
    document.body.style.overflow = 'visible';
  })
})
