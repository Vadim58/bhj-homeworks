const hasTooltip = document.querySelectorAll('.has-tooltip');
console.log(hasTooltip[1]);
hasTooltip[1].addEventListener('click', function(e) {
	e.preventDefault();

	hasTooltip[1].outerHTML += `
      <div class="tooltip tooltip_active">Текст подсказки</div>
	`
});