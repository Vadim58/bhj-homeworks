const buttons = Array.from(document.querySelectorAll('.font-size'));
const content = document.querySelector('.book__content');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(event) {
		event.preventDefault();
		buttons.map(item => item.classList.remove('font-size_active'));
		buttons[i].classList.add('font-size_active');
		buttons[i].classList.contains('font-size_small') ? 
			content.classList.add('book_fs-small') : content.classList.remove('book_fs-small');		
		buttons[i].classList.contains('font-size_big') ? 
			content.classList.add('book_fs-big') : content.classList.remove('book_fs-big');	
	})
}