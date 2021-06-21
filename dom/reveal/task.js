const block = Array.from(document.querySelectorAll('.reveal'));
const viewPort = window.innerHeight;
for (let i = 0; i < block.length; i++) {
    let blockLocation = block[i].getBoundingClientRect();
    window.addEventListener('scroll', function() {
        if ((viewPort > blockLocation.top) && (blockLocation.bottom > 0 && blockLocation.top > -blockLocation.height)) {
            block[i].classList.add('reveal_active');
        } else {
            block[i].classList.remove('reveal_active');
        }
    })
}