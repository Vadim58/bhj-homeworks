let linksArray = document.querySelectorAll('ul.menu_main > li > a');
for (let i = 0; i < linksArray.length; i++) {
    linksArray[i].onclick = () => {
        let highListItem = linksArray[i].closest('li');
        let submenu = highListItem.querySelector('ul');
        if (submenu) {
            submenu.classList.toggle('menu_active');
            return false
        }
    }
}