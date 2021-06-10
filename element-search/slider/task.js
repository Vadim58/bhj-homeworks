let arrowNext = document.querySelector('div.slider__arrow_next');
let arrowPrev = document.querySelector('div.slider__arrow_prev');
let picArray = Array.from(document.querySelectorAll('.slider__item'));

arrowNext.onclick = () => {
    let index = picArray.findIndex(picture => picture.className.includes('slider__item_active'));
    picArray[index].classList.remove('slider__item_active');
    (index < picArray.length - 1) ? index += 1 : index = 0;
	 picArray[index].classList.add('slider__item_active');    
}
arrowPrev.onclick = () => {
    let index = picArray.findIndex(picture => picture.className.includes('slider__item_active'));
    picArray[index].classList.remove('slider__item_active');
    (index > 0) ? index -= 1 : index = picArray.length - 1;
     picArray[index].classList.add('slider__item_active');
}
