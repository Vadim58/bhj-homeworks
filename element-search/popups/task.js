let modalMain = document.getElementById('modal_main');
console.log(modalMain);
modalMain.classList.add('modal_active');

let modalCloseCross = document.querySelectorAll('div.modal__close');
console.log(modalCloseCross[0]);
modalCloseCross[0].onclick = () => modalMain.classList.remove('modal_active');
