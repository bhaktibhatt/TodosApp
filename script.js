var addTodo = document.getElementById('addTask');
var writeTodo = document.getElementById('todo');
addTodo.addEventListener('click', function(){
    writeTodo.setAttribute('rows', 3)
    writeTodo.setAttribute('placeholder',"Enter Task title here")
    addTodo.style.display = 'none';
    document.querySelector('.task-container').style.alignItems = 'flex-start'
    document.querySelector('.btn-container').style.opacity='1'
})

function cancel(){
    document.querySelector('.btn-container').style.opacity='0'
    writeTodo.setAttribute('rows', 1)
    addTodo.style.display = 'block';
}