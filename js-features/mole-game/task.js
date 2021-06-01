let hole;
let k = 0;
const deaths = document.getElementById('dead');
const losts = document.getElementById('lost');
for (let i = 1; i < 10; i++) {
	 hole = document.getElementById(`hole${i}`);
	 hole.onclick = function() {
  if (hole.className.includes( 'hole_has-mole' )) {
    deaths.textContent = Number(deaths.textContent) + 1;
  }
  else {
  	losts.textContent = Number(losts.textContent) + 1;
  	k += 1;
  } 
 }
}
