const block = document.querySelector('.reveal');
console.log(block);
let inform = block.getBoundingClientRect();
const viewPort = window.innerHeight;
console.log(inform);
console.log(viewPort - inform.top);
window.addEventListener('scroll', function() {
	return viewPort > inform.top ? true : false
		block.classlist.add('reveal_active');
		console.log('ssss');
	}
)