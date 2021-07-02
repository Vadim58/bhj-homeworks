const hasTooltip = document.querySelectorAll('.has-tooltip');
for (let i = 0; i < hasTooltip.length; i++) {

    let position = hasTooltip[i].getBoundingClientRect();
    hasTooltip[i].addEventListener('click', function(event) {
        event.preventDefault();
        hasTooltip[i].outerHTML += `
      <div class="tooltip tooltip_active" style = "left: ${position.left}px; top: ${position.top + 15}px; position: absolute;">${this.title}
      </div>`
       console.log(hasTooltip[i].getAttribute('href'));
      
    });
}