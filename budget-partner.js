// Botão Salvar Orçamento
window.onload = () => novoBotao();
function novoBotao() {
    let button = document.createElement('a');
    button.setAttribute('id', 'button-cart');

    let templateButtonCSS = `

    .trigger {
        position: fixed;
        left: -71px; 
        bottom: 50%;
        border-radius: 0 0 5px 5px;
        padding: 3px 15px;
        background-color: #b0b0b0; 
        color: #424242;
        text-transform: uppercase; 
        transform: rotate(-90deg);
        z-index: 99;
        font-size: 13px;
        cursor: pointer;
      }

      .trigger:hover {
        text-decoration: none;
      }

      .trigger > span {
        margin-left: 3px; 
      }

      @media(max-width:465px){

        .trigger{
            left: 0;
            right: 0;
            bottom: 0;
            padding: 5px 17px;
            font-size: 12px;
            max-width: 180px;
            margin: 0 auto;
            text-align: center;
            transform: rotate(0deg) !important;
            border-radius: 5px 5px 0 0;
        }

      }

    `

    let styleButton = document.createElement('style');
    styleButton.innerHTML = templateButtonCSS;
  
    button.classList.add('trigger');
    button.innerHTML = 'Salvar <span>Orçamento</span>'
  
    button.onclick = function () {
  
      modalHTML();
      abrirModal();
    
    };

    document.body.appendChild(styleButton);
    document.body.appendChild(button);
}

// Modal HTML
function modalHTML() {
  let templateCSS = `

    .modal-canalfy {
        position: fixed ;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.10s, opacity 0.10s 0s, transform 0.25s;
        z-index: 99;
    }

    .modal-content-canalfy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 24px;
        width: 400px;
        border-radius: 8px;
        opacity: 0;
    }

    .modal-content-title-canalfy{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: gray;
        font-weight: 600;
    }

    .modal-content-svg-canalfy{
        width: 50px;
        height: 50px;
        color: gray;
        fill: gray;
    }

    .modal-content-input-canalfy{
        display: flex;
        width: 100%;
        height: 40px;
        text-align: center;
        margin-top: 16px;
        padding: 0 10px;
        border: 1px solid lightgray;
        border-radius: 0px;
    }

    .modal-content-button-canalfy{
        width: 100%;
        height: 40px;
        text-align: center;
        margin-top: 16px;
        background-color: #0047d9;
        border: 0px;
        color: #ffffff;
        text-transform: uppercase;
    }

    .close-button-canalfy {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        cursor: pointer;
        border-radius: 4px;
        font-size: 18px;
        color: black;
        cursor: pointer
    }

    .close-button-canalfy:hover{
        color: gray;
    }

    .modal-content-wrapper-components-canalfy{
        display: none;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .modal-content-wrapper-whatsapp-canalfy{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
    }

    .modal-content-input-whatsapp-canalfy{
        width: 130px;
        height: 40px;
        padding: 10px;
        text-align: center;
        border: 1px solid lightgray;
        border-radius: 0px;
    }

    .modal-content-button-whatsapp-canalfy{
        background-color: #25D366;
        border: 0px;
        color: #ffff;
        width: 85px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content-button-whatsapp-svg-canalfy{
        width: 25px;
        height: 25px;
        color: #ffff;
        fill: #ffff;
    }

    .modal-content-button-copy-canalfy{
        width: 100px;
        height: 40px;
        border: 0px;
        margin-top: 16px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #0047d9;
        color: #ffff;
    }

    .modal-content-button-copy-svg-canalfy{
        width: 25px;
        height: 25px;
        color: #ffff;
        fill: #ffff;
    }

    .show-modal-canalfy {
        display: block;
        opacity: 1;
        visibility: visible;
        transform: scale(1.0);
        transition: visibility 0s linear 0.10s, opacity 0.10s 0s, transform 0.25s;
    }

    .show-modal-canalfy .modal-content-canalfy {
        opacity: 1;
    }


    @media(max-width:320px){

    .modal-content-canalfy {
        width: 256px;
    }

    .modal-content-wrapper-components-canalfy{
        flex-direction: column;
    }

    .modal-content-button-whatsapp-canalfy{
        width: 81px;
    }

    .modal-content-svg-canalfy {
        width: 35px;
        height: 40px;
    }

    .modal-content-title-canalfy{
        font-size: 14.5px;
    }

    .modal-content-button-copy-canalfy{
        width: 100%;
    }

    }

    `;

  let templateHTML = `
      <div id="modal" class="modal-canalfy">
        <div class="modal-content-canalfy">
            <span id="close-button" class="close-button-canalfy" onClick="removerModal()">x</span>

            <h1 class="modal-content-title-canalfy">
              <svg class="modal-content-svg-canalfy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                <g>
                  <path d="M17.3,17.6c-1,0-1.8,0.8-1.8,1.8s0.8,1.9,1.8,1.9s1.8-0.8,1.8-1.8S18.3,17.6,17.3,17.6z M17.3,20.5c-0.6,0-1.1-0.5-1.1-1.1
                    s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S17.9,20.5,17.3,20.5z"/>
                  <path d="M9.9,17.6c-1,0-1.8,0.8-1.8,1.8s0.8,1.9,1.8,1.9s1.8-0.8,1.8-1.8S10.9,17.6,9.9,17.6z M9.9,20.5c-0.6,0-1.1-0.5-1.1-1.1
                    s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S10.6,20.5,9.9,20.5z"/>
                  <path d="M19.6,11.9c-0.2,0-0.4,0.1-0.4,0.3c0,0.6-0.5,0.9-1.1,0.9H8.2l-1-5.1h4.9c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.4-0.3H7.1
                    L6.7,5.5C6.6,5.3,6.5,5.2,6.3,5.2H4.2C4,5.2,3.8,5.3,3.8,5.5s0.2,0.4,0.4,0.4H6l1.8,8.9c0.3,1.2,1.3,2.1,2.5,2.1h8.4
                    c0.2,0,0.4-0.1,0.4-0.4c0-0.2-0.1-0.4-0.4-0.4h-8.3c-0.9,0-1.6-0.6-1.8-1.4l-0.1-0.8h9.8c0.9,0,1.7-0.7,1.8-1.6
                    C20,12.1,19.9,12,19.6,11.9z"/>
                  <path d="M17.3,3.8c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S19.5,3.8,17.3,3.8z M17.3,11.1c-1.8,0-3.3-1.5-3.3-3.3
                    c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3C20.5,9.6,19,11.1,17.3,11.1z"/>
                  <path d="M18.7,7.4h-1.1V6.3c0-0.2-0.1-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v1.1h-1.1c-0.2,0-0.4,0.2-0.4,0.3s0.1,0.4,0.4,0.4h1.1v1.1
                    c0,0.2,0.1,0.4,0.4,0.4c0.2,0,0.4-0.1,0.4-0.4V8.1h1.1c0.2,0,0.4-0.2,0.4-0.4C19.1,7.6,18.9,7.4,18.7,7.4z"/>
                </g>
              </svg>

              Compartilhar Carrinho
            </h1>

            <input id="inputCart" class="modal-content-input-canalfy" type="text" placeholder="Código do Vendedor" onkeyup="onlyNumbers(this)" onfocus="resetInput()" />
            <button id="btnCart" class="modal-content-button-canalfy" onclick="linkExclusivoCanalfy()">Gerar Link</button>

            <div class="modal-content-wrapper-components-canalfy">

              <div class="modal-content-wrapper-whatsapp-canalfy">
                <input id="inputWhatsapp" class="modal-content-input-whatsapp-canalfy" type="text" placeholder="(00) 00000-0000" onkeyup="onlyNumbers(this)" /> 
                <button id="buttonWhatsapp" class="modal-content-button-whatsapp-canalfy" onclick="linkWhatsAppCanalfy()">
                  Enviar 
                  <svg class="modal-content-button-whatsapp-svg-canalfy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                  <path d="M38.4,12.4C35.1,9.1,30.7,7.3,26,7.3c-4.7,0-9.1,1.8-12.5,5.1c-3.4,3.3-5.2,7.7-5.2,12.4v0v0c0,2.8,0.7,5.7,2.2,8.3
                    l-2.1,9.6l9.7-2.2c2.4,1.2,5.2,1.9,7.9,1.9h0c4.7,0,9.1-1.8,12.5-5.1c3.4-3.3,5.2-7.7,5.2-12.4C43.7,20.1,41.8,15.7,38.4,12.4z
                    M26,39.5L26,39.5c-2.5,0-4.9-0.6-7.1-1.8l-0.5-0.2L12,39l1.4-6.3l-0.3-0.5c-1.3-2.3-2-4.9-2-7.4C11.1,16.6,17.8,10,26,10
                    c4,0,7.7,1.5,10.5,4.3c2.8,2.8,4.4,6.5,4.4,10.4C40.9,32.9,34.2,39.5,26,39.5z"/>
                  <path d="M21.2,17.1h-0.8c-0.3,0-0.7,0.1-1.1,0.5c-0.4,0.4-1.4,1.4-1.4,3.4s1.4,3.9,1.6,4.2c0.2,0.3,2.8,4.5,6.9,6.1
                    c3.4,1.3,4.1,1.1,4.8,1c0.7-0.1,2.4-1,2.7-1.9s0.3-1.7,0.2-1.9c-0.1-0.2-0.4-0.3-0.8-0.5c-0.4-0.2-2.4-1.2-2.8-1.3
                    c-0.4-0.1-0.6-0.2-0.9,0.2c-0.3,0.4-1.1,1.3-1.3,1.6c-0.2,0.3-0.5,0.3-0.9,0.1c-0.4-0.2-1.7-0.6-3.2-2c-1.2-1.1-2-2.4-2.3-2.8
                    c-0.2-0.4,0-0.6,0.2-0.8c0.2-0.2,0.4-0.4,0.6-0.7c0.2-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.1-0.5,0-0.7c-0.1-0.2-0.9-2.2-1.2-3h0
                    C21.8,17.1,21.5,17.1,21.2,17.1z"/>
                  </svg>
                </button>
              </div>

              <button id="buttonCopy" class="modal-content-button-copy-canalfy" onclick="copiarTexto()">
                Copiar 📋
              </button>
            </div>


        </div>
      </div>

  `;

  let style = document.createElement('style');
  style.innerHTML = templateCSS;

  let getButton = document.getElementById('button-cart');
  getButton.insertAdjacentElement('beforebegin', style);
  getButton.insertAdjacentHTML('beforebegin', templateHTML);
}

// Criação do link
function linkExclusivoCanalfy() {
  let dataSession = document.getElementsByTagName('html')[0]?.getAttribute('data-session');
 
  if(dataSession === null){
     dataSession = document.getElementsByTagName('html')[0]?.getAttribute('data-checkout-session_id');
  }

  let URL = `https://${window.location.hostname}`;
  let URL_TO_FETCH_GET_CART = `${URL}/web_api/carts/${dataSession}/`;

  axios
    .get(URL_TO_FETCH_GET_CART)
    .then(function (response) {
      let arrayProduct = response.data;

      let products = [];

      arrayProduct.forEach((item) => {
        products.push(
          `${item.Cart.product_id}:${item.Cart.quantity}:${item.Cart.variant_id}`
        );
      });

      let partner;
        if (document.getElementById('inputCart').value === '') {
            partner = null;
        } else {
            partner = document.getElementById('inputCart').value;
        }

      let productsCart = products.join();

      let APIURL = `https://carrinho.canalfy.com/api/cart/session/share?products=${productsCart}&store=14251116-6e08-11eb-a750-0242ac110002&partner=${partner}`;

      fetch(APIURL)
        .then((dataWrappedByPromise) => dataWrappedByPromise.json())
        .then((data) => {
          const urlShareCart = data.redirect;

          console.log(data);
          console.log(urlShareCart);

          document.getElementById('btnCart').style.display = 'none';

          document.getElementById('inputCart').value = urlShareCart;

            document
                .getElementsByClassName('modal-content-wrapper-components-canalfy')[0]
                .setAttribute('style', 'display: flex');
            
            document
                .getElementsByClassName('modal-content-input-canalfy')[0]
                .setAttribute('style', 'display: flex');
          });
    })
    .catch(function (error) {
      document.getElementById('inputCart').style.border = '1px solid red';
      document.getElementById('inputCart').value =
        'Por Favor Adicione Produto ao Carrinho';

      return Promise.reject(error);
    });
}

// Resetar o input
function resetInput() {
  document.getElementById('inputCart').style.border = '1px solid lightgray';
}

// Abrir modal
function abrirModal() {
  let modalElement = document.getElementById('modal');
  modalElement.classList.add('show-modal-canalfy');
}

// Fechar modal
function removerModal() {
  let modalElement = document.getElementById('modal');
  modalElement.classList.remove('show-modal-canalfy');

  document.getElementsByClassName('modal-content-wrapper-components-canalfy')[0].setAttribute('style', 'display: none');

  document.getElementById('btnCart').setAttribute('style', 'display: block');

  document.getElementById('inputCart').value = '';
  document.getElementById('inputWhatsapp').value = '';

  buttonCopy = document.getElementById('buttonCopy')
  buttonCopy.innerHTML = 'Copiar 📋';
}

// Fechar modal ao clicar fora dela
function windowOnClick(event) {
  let modalElement = document.getElementById('modal');

  if (event.target === modalElement) {
    removerModal();
  }
}
window.addEventListener('click', windowOnClick);

// Validação de campo de número
function onlyNumbers(num) {
  let er = /[^0-9.]/;
  er.lastIndex = 0;
  let campo = num;
  if (er.test(campo.value)) {
    campo.value = '';
  }
}

// Função copiar conteúdo
function copiarTexto() {
  let copyText = document.getElementById('inputCart');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');

  avisoCopia();
}

// Aviso de link copiado
function avisoCopia(){
  buttonCopy = document.getElementById('buttonCopy')
  buttonCopy.innerHTML = 'Link Copiado!';
}

// Criar link do WhatsApp
function linkWhatsAppCanalfy() {
  let phone = document.getElementById('inputWhatsapp').value;
  let linkCart = document.getElementById('inputCart').value;

  let urlShareCartWithPhone;

  if (document.getElementById('inputWhatsapp').value == '') {
    urlShareCartWithPhone = `${linkCart}`;
  } else {
    urlShareCartWithPhone = `${linkCart}&phone=55${phone}`;
  }

  window.open(`http://api.whatsapp.com/send?text=${urlShareCartWithPhone}`);
}