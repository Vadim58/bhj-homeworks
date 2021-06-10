let linksArray = Array.from(document.querySelectorAll('ul.menu_main a.menu__link'));
let subMenu = Array.from(document.querySelectorAll('li ul'));
for (let i = 0; i < linksArray.length; i++) {
  linksArray[i].onclick = () => {
	    listItem[ ].classList.toggle('menu_active');
	    return false;
  }
}



