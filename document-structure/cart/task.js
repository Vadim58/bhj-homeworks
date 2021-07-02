const product = document.querySelectorAll('.product');
const image = document.querySelectorAll('.product__image');
const incButton = document.querySelectorAll('.product__quantity-control_inc');
const decButton = document.querySelectorAll('.product__quantity-control_dec');
const numberOfGoods = document.querySelectorAll('.product__quantity-value');
const cart = document.querySelector('.cart__products');
const addButton = document.querySelectorAll('.product__add');
for (let i = 0; i < product.length; i++) {
    incButton[i].addEventListener('click', function() {
        numberOfGoods[i].textContent = Number(numberOfGoods[i].textContent) + 1;

    })

    decButton[i].addEventListener('click', function() {
        if (Number(numberOfGoods[i].textContent) > 1) {
            numberOfGoods[i].textContent = Number(numberOfGoods[i].textContent) - 1;
        }
    })

        let cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        let cartProductsNumber = document.querySelectorAll('.cart__product_count');
        console.log(cartProductsNumber[i].textContent = Number(cartProductsNumber[i].textContent) + Number(numberOfGoods[i]));
     if(cartProduct.find(item => item.getAttribute('data-id') === product.getAttribute('data-id'))){
        cartProductsNumber[i].textContent = Number(cartProductsNumber[i].textContent) + Number(numberOfGoods[i]);
     }    
   else {
    addButton[i].addEventListener('click', function() {
        cart.innerHTML += `
      <div class="cart__product" data-id="${product[i].getAttribute('data-id')}">
    <img class="cart__product-image" src="${image[i].getAttribute('src')}">
    <div class="cart__product-count">${numberOfGoods[i].textContent}</div>
    </div>
      `
    })}

       

       

}


          
      // cartProductsNumber[i].textContent = Number(cartProductsNumber[i].textContent) + Number(numberOfGoods[i]);



