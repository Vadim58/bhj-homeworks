let linksArray = Array.from(document.querySelectorAll('a.menu__link'));
let subMenu = document.querySelector('ul.menu_sub');
for (let i = 0; i < linksArray.length; i++) {
  linksArray[i].onclick = () => {
	  if(linksArray[i].closest('li') === subMenu.closest('li')){
	    subMenu.classList.toggle('menu_active');
	    return false;
	}
  }
}


