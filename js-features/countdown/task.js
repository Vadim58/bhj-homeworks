function getCountdown() {
let timer = document.getElementById('timer');
timer.textContent -= 1;
}
let timerID = setInterval(getCountdown, 1000);
setTimeout(function clear() { 
	clearInterval(timerID); 
	alert('Вы победили в игре!'); 
}, 59000);
