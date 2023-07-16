var addTodo = document.getElementById('addTask');
var writeTodo = document.getElementById('todo');
addTodo.addEventListener('click', function(){
    writeTodo.setAttribute('rows', 3)
    document.querySelector('.task-container')
})