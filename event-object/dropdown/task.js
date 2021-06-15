let mainButton = document.querySelector('div.dropdown__value');
let dropDown = document.querySelector('.dropdown__list');
let dropDownLink = Array.from(document.querySelectorAll('a'));

mainButton.addEventListener('click', function () {
	dropDown.classList.toggle('dropdown__list_active');
	return false	
});

for (let i = 0; i < dropDownLink.length; i++) {
dropDownLink[i].addEventListener('click', function () {
	for (i = 0; i < dropDownLink.length; i++) {
	dropDown.classList.remove('dropdown__list_active');
	mainButton.textContent = dropDownLink[i].textContent;
	}
});
}



 
