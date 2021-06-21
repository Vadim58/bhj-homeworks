const rotator = Array.from(document.querySelectorAll('.rotator__case'));

	function foo(){
		for (let i = 0; i < rotator.length; i++) {
		//rotator.map(item => item.classList.remove('rotator__case_active'));
		if (rotator[i].className === 'rotator__case_active'){
		rotator[i].classList.remove('rotator__case_active');
		}
		
	}
	}


setInterval(foo, 1000);








