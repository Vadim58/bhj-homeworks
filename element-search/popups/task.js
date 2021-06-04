let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
modalMain.classList.add('modal_active'); 
let closeTimes = Array.from(document.getElementsByClassName('modal__close_times'));
let closeMain = closeTimes[0];
let closeSuccess = closeTimes[1];
let dangerButton = document.querySelectorAll('a.show-success');
let successButton = document.querySelectorAll('a.btn_success');
closeMain.onclick = () => modalMain.classList.remove('modal_active');
dangerButton[0].onclick = () =>  {
	modalMain.classList.remove('modal_active'); 
	modalSuccess.classList.add('modal_active');
} 
closeSuccess.onclick = () => modalSuccess.classList.remove('modal_active');

