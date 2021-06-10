let linksArray = document.querySelectorAll('ul.menu_main > li > a');
let subMenu = Array.from(document.querySelectorAll('li ul'));
for (let i = 0; i < linksArray.length; i++) {
    linksArray[i].onclick = () => {
        index = subMenu.findIndex(menuItem => (menuItem.closest('li') === linksArray[i].closest('li')));
        subMenu[index].classList.toggle('menu_active');
        return false;
    }
}