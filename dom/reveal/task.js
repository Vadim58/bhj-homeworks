const block = document.querySelector('.reveal');
console.log(block);
let inform = block.getBoundingClientRect();
const viewPort = window.innerHeight;
console.log(`верх ${inform.top}`);
console.log(`низ ${inform.bottom}`);
console.log(`окно ${viewPort}`);
console.log( - inform.height);
window.addEventListener('scroll', function() {
	if ((viewPort > inform.top) && (inform.bottom > 0 && inform.top > - inform.height) ) {	
	console.log('ssss');
	block.classList.add('reveal_active');
	
	}
	return false;
  }
)