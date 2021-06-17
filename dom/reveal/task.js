const block = document.querySelector('.reveal');
console.log(block);
let inform = block.getBoundingClientRect();
const viewPort = window.innerHeight;
console.log(inform);
console.log(viewPort - inform.top);
window.addEventListener('scroll', function() {
	if (viewPort > inform.top) {
		
	console.log('ssss');
	}
	}
)