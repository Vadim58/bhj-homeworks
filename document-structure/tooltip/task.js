const hasTooltip = document.querySelectorAll('.has-tooltip');
for (let i = 0; i < hasTooltip.length; i++) {
    let position = hasTooltip[i].getBoundingClientRect();
    hasTooltip[i].addEventListener('click', function(event) {
       event.preventDefault();
       let tooltips = Array.from(document.querySelectorAll('.tooltip'));
       let item = tooltips.find(item => item.classList.contains('tooltip_active'))
       if(item){
         item.classList.remove('tooltip_active');
       }
       else {
        hasTooltip[i].insertAdjacentHTML('afterbegin', `
      <div class="tooltip tooltip_active" style = "left: ${position.left}px; top: ${position.top + 15}px; position: absolute;">${this.title}
      </div>`)}
    });
}