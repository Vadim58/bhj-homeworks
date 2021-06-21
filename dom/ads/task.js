const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let index = rotator.findIndex(span => span.classList.contains('rotator__case_active'));

function rotatorChange() {
    rotator[index].classList.remove('rotator__case_active');
    (index < rotator.length - 1) ? index += 1: index = 0
    rotator[index].classList.add('rotator__case_active');
}
setInterval(rotatorChange, 1000);