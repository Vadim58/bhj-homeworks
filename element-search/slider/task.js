let arrowNext = document.getElementsByClassName('slider__arrow_next');
let arrowPrev = document.getElementsByClassName('slider__arrow_prev');
let sliderItems = document.getElementsByClassName('slider__item');
let itemsArray = Array.from(sliderItems);

arrowNext[0].onclick = () => {
  for (let i = 0; i < itemsArray.length; i++) {
	
	if (itemsArray[i].className.includes('slider__item_active') && i < 4) {
	   itemsArray[i + 1].classList.add('slider__item_active');
	   itemsArray[i].classList.remove('slider__item_active');
	   return false;
     }
     if (i === 4) {
		 itemsArray[0].classList.add('slider__item_active');
	     itemsArray[i].classList.remove('slider__item_active');
	 }	 
   }
 }
 arrowPrev[0].onclick = () => {
	 for (let k = 4; k > -1; k--) {
	
	if (itemsArray[k].className.includes('slider__item_active') && k > 0) {
	   itemsArray[k - 1].classList.add('slider__item_active');
	   itemsArray[k].classList.remove('slider__item_active');
	   return false;
     }
     if (k === 0) {
		 itemsArray[4].classList.add('slider__item_active');
	     itemsArray[k].classList.remove('slider__item_active');
	 }	 
   }
 }

