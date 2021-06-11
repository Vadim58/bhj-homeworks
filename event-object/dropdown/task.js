let arrow = document.querySelector('div.dropdown__value');
let dropDown = document.querySelector('.dropdown__list');
let listItem = document.querySelectorAll('li');



function cliik () {
	dropDown.classList.toggle('dropdown__list_active');
	return false
	
}

function lil () {
	
	dropDown.classList.remove('dropdown__list_active');
	arrow.textContent = "hooy";
	
}

arrow.addEventListener('click', cliik);

for (let i = 0; i < listItem.length; i++){
listItem[i].addEventListener('click', lil);
}