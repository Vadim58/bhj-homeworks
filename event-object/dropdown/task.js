let mainButton = document.querySelector('div.dropdown__value');
let dropDown = document.querySelector('.dropdown__list');
let listItem = Array.from(document.querySelectorAll('li'));
let dropDownLink = Array.from(document.querySelectorAll('a'));


mainClick = () => {	
	dropDown.classList.toggle('dropdown__list_active');
	return false	
}

itemClick = () => {
	for (i = 0; i < dropDownLink.length; i++) {
	dropDown.classList.remove('dropdown__list_active');
	mainButton.textContent = dropDownLink[i].textContent;
	console.log(dropDownLink[i].textContent); 	
	}
	
}


//ОБРАБОТЧИКИ СОБЫТИЙ


mainButton.addEventListener('click', function () {
	dropDown.classList.toggle('dropdown__list_active');
	return false	
});

for (let i = 0; i < dropDownLink.length; i++) {
dropDownLink[i].addEventListener('click', function () {
	for (i = 0; i < dropDownLink.length; i++) {
	dropDown.classList.remove('dropdown__list_active');
	mainButton.textContent = dropDownLink[i].textContent;
	console.log(dropDownLink[i].textContent); 	
	}
});
}



 
