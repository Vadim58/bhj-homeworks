let subMenu = document.querySelectorAll('ul.menu_sub');
let linkAbout;
let linkServices;
let linksArray = Array.from(document.querySelectorAll('a.menu__link'));
for (let i = 0; i < linksArray.length; i++) {
    if (linksArray[i].textContent.includes('О компании')) {
        linkAbout = linksArray[i]
    }
}
for (let i = 0; i < linksArray.length; i++) {
    if (linksArray[i].textContent.includes('Услуги')) {
        linkServices = linksArray[i]
    }
}
linkAbout.onclick = () => {
    subMenu[0].classList.add('menu_active');
    return false;
}
linkServices.onclick = () => {
    subMenu[1].classList.add('menu_active');
    return false;
};


