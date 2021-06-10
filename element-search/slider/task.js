let arrowNext = document.querySelector('div.slider__arrow_next');
let arrowPrev = document.querySelector('div.slider__arrow_prev');
let picArray = Array.from(document.querySelectorAll('.slider__item'));

arrowNext.onclick = () => {
    let index = picArray.findIndex(picture => picture.className.includes('slider__item_active'));
    picArray[index].classList.remove('slider__item_active');
    (index < picArray.length - 1) ?
    picArray[index + 1].classList.add('slider__item_active'):
        picArray[0].classList.add('slider__item_active');
    return false;
}
arrowPrev.onclick = () => {
    let index = picArray.findIndex(picture => picture.className.includes('slider__item_active'));
    picArray[index].classList.remove('slider__item_active');
    (index > 0) ?
    picArray[index - 1].classList.add('slider__item_active'):
        picArray[picArray.length - 1].classList.add('slider__item_active');
    return false;
}