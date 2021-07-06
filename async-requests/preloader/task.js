let loader = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', function () {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active');
		let currencyRates = JSON.parse(this.responseText);
		console.log(currencyRates.response.Valute);
		let item = document.getElementById('items');
		console.log(item);
		item.innerHTML +=`
		 <div class="item__code">
    ${currencyRates.response.Valute.AMD.CharCode}
</div>
<div class="item__value">
    ${currencyRates.response.Valute.AMD.Value}
</div>
<div class="item__currency">
 руб.
 </div>
		
		`
		
		
		
		
	}
})