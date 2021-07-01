const product = document.querySelectorAll('.product');
const image = document.querySelectorAll('.product__image');
const incButton = document.querySelectorAll('.product__quantity-control_inc');
const numberOfGoods = document.querySelectorAll('.product__quantity-value');
const cart = document.querySelector('.cart__products');

const addButton = document.querySelectorAll('.product__add');

for(let i = 0; i < product.length; i++){
	incButton[i].addEventListener('click', function() {
		for (let i = 0; i < numberOfGoods.length; i++){
		numberOfGoods[i].textContent = Number(numberOfGoods[i].textContent) + 1;
	   }
	})

 addButton[i].addEventListener('click', function() {
      cart.innerHTML += `
      <div class="cart__product" data-id="${product[i].getAttribute('data-id')}">
    <img class="cart__product-image" src="${image[i].getAttribute('src')}">
    <div class="cart__product-count">${numberOfGoods[i].textContent}</div>
    </div>
      `
    })

}