let mainButton = document.querySelector('div.dropdown__value');
let dropDown = document.querySelector('.dropdown__list');
let listItem = Array.from(document.querySelectorAll('li'));


function mainClick () {
	dropDown.classList.toggle('dropdown__list_active');
	return false	
}

function itemClick () {
	
	//dropDown.classList.remove('dropdown__list_active');
	mainButton.textContent = 'ffff';
    return false
}


//ОБРАБОТЧИКИ СОБЫТИЙ

mainButton.addEventListener('click', mainClick);


	
listItem.addEventListener('click', itemClick);




