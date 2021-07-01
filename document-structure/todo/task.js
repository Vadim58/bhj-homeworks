const tasksList = document.getElementById('tasks__list');
console.log(tasksList);
const taskInput = document.getElementById('task__input');
console.log(taskInput);
const tasksAdd = document.getElementById('tasks__add');
const taskRemove = document.querySelector('.task__remove');
taskInput.addEventListener('keyup', function(e) {
	  e.preventDefault();
		if(e.key === 'Enter'){
	  tasksList.innerHTML += `
       <div class="task">
  <div class="task__title">
    ${taskInput.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
	  `
	  taskInput.value = null;
	}
})
tasksAdd.addEventListener('click', function(e) {
	  e.preventDefault();
	  tasksList.innerHTML += `
       <div class="task">
  <div class="task__title">
    ${taskInput.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
	  `
	  taskInput.value = null;	
})

taskRemove.onclick = () => 

