const tasksList = document.getElementById('tasks__list');
console.log(tasksList);
const taskInput = document.getElementById('task__input');
console.log(taskInput);
taskInput.addEventListener('keyup', function(e) {

		console.log(taskInput.value);
})