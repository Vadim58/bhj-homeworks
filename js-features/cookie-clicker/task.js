const clicks = document.getElementById('clicker__counter');
let image = document.getElementById('cookie');
image.onclick = function() {
	clicks.textContent = Number(clicks.textContent) + 1;
	if (image.width === 200) {
		image.width = 220;
	}
	else if (image.width === 220) {
		image.width = 200;
	}
}

