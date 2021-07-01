const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');

taskInput.addEventListener('keyup', function(e) {
    e.preventDefault();
    if (e.key === 'Enter' && taskInput.value.trim().length > 0) {
        tasksList.innerHTML += `
       <div class="task">
  <div class="task__title">
    ${taskInput.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
    `
        taskInput.value = null;
        let taskRemove = document.querySelectorAll('.task__remove');
        for (let i = 0; i < taskRemove.length; i++) {
            taskRemove[i].addEventListener("click", function() {
                taskRemove[i].parentNode.parentNode.removeChild(taskRemove[i].parentNode);
            });
        }
    }
})
tasksAdd.addEventListener('click', function(e) {
    e.preventDefault();
    if (taskInput.value.trim().length > 0) {
        tasksList.innerHTML += `
       <div class="task">
  <div class="task__title">
    ${taskInput.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
    `
        taskInput.value = null;
        let taskRemove = document.querySelectorAll('.task__remove');
        for (let i = 0; i < taskRemove.length; i++) {
            taskRemove[i].addEventListener("click", function() {
                taskRemove[i].parentNode.parentNode.removeChild(taskRemove[i].parentNode);
            });
        }
    }
})