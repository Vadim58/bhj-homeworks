const hasTooltip = document.querySelectorAll('.has-tooltip');
for (let i = 0; i < hasTooltip.length; i++) {
  let position = hasTooltip[i].getBoundingClientRect();
  hasTooltip[i].addEventListener('click', function(event) {
    event.preventDefault(); 
    Array.from(this.querySelectorAll('div')).map(item => item.classList.remove('tooltip_active'));
    if (this.querySelector('div')) {  
      this.querySelector('div').remove();
    } else {
      this.insertAdjacentHTML('afterbegin', `
      <div class="tooltip tooltip_active" style = "left: ${position.left}px; top: ${position.top + 15}px; position: absolute;">${this.title}
      </div>`);
    }
  });
}