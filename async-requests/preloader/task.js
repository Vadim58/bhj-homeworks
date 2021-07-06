let loader = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    let currencyRates = JSON.parse(this.responseText);
    for (current in currencyRates.response.Valute) {
      let item = document.getElementById('items');
      item.insertAdjacentHTML('afterbegin', `
		 <div class = 'item'>
		 <div class="item__code">
    ${currencyRates.response.Valute[current].CharCode}
</div>
<div class="item__value">
    ${currencyRates.response.Valute[current].Value}
</div>
<div class="item__currency">
 руб.
 </div>
 </div>
		`)
    }
  }
})