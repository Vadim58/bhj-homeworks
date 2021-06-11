const arrow = document.querySelector('div.dropdown__value');
console.log(arrow);
const dropDown = document.querySelector('.dropdown__list');
const listItem = document.querySelectorAll('li');
console.log(listItem);



function cliik () {
	dropDown.classList.add('dropdown__list_active');
	return false
	
}

function lil () {
	arrow.textContent = "hooy";
	return false
}

arrow.addEventListener('click', cliik);

for (let i = 0; i < listItem.length; i++){
listItem[i].addEventListener('click', lil);

}