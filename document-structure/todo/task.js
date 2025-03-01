const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');

function addNewTask() {
  tasksList.insertAdjacentHTML('afterend', `
     <div class="task">
    <div class="task__title">
        ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
</div>
    `);
  taskInput.value = null;
}

function removeTask() {
  const taskRemove = document.querySelector('.task__remove');
  taskRemove.addEventListener("click", function() {
    taskRemove.closest('div').remove();
  });
}

taskInput.addEventListener('keyup', function(e) {
  e.preventDefault();
  if (e.key === 'Enter' && taskInput.value.trim().length > 0) {
    addNewTask();
    removeTask();
  }
})

tasksAdd.addEventListener('click', function(e) {
  e.preventDefault();
  if (taskInput.value.trim().length > 0) {
    addNewTask();
    removeTask();
  }
})

