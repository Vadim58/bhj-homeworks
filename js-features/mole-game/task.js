const losts = document.getElementById('lost');
const deaths = document.getElementById('death');


   
 function getHit() {
  if (this.className.includes( 'hole_has-mole' )) {
    deaths.textContent = Number(deaths.textContent) + 1;
    if (Number(deaths.textContent) === 10) {
    	alert('Победа!');
    	losts.textContent = 0;
    	deaths.textContent = 0;
    }
  }
  else {
  	losts.textContent = Number(losts.textContent) + 1;
  	console.log(i);
  	if (Number(losts.textContent) === 5) {
	   alert('Вы проиграли!');
	   losts.textContent = 0;
	   deaths.textContent = 0;
   }
  } 
 }

for(i = 1; i < 10; i++) { 
		getHole = i => document.getElementById(`hole${i}`);      
    getHole(i).onclick = getHit;
  }