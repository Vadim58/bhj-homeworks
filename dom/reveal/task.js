const block = document.querySelector('.reveal');
let inform = block.getBoundingClientRect();
const viewPort = window.innerHeight;
window.addEventListener('scroll', function() {
	if ((viewPort > inform.top) && (inform.bottom > 0 && inform.top > - inform.height) ) {	
	block.classList.add('reveal_active');
	}
	else {
		block.classList.remove('reveal_active');
	}
  }
)