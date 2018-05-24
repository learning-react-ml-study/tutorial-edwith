const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list')
const todoClear = document.querySelector('.todo-clear')
const todoInput = document.getElementById('input')
const submitBtn = document.getElementById('submit-btn')

// 모든 이벤트 한번에 로드 
loadEvent();

function loadEvent() {
    // DOM 로드 이벤트 추가 --> 로컬 스토리지에 추가하기 위해 
    document.addEventListener('DOMContentLoaded', getTodos)
    // add Todo
    form.addEventListener('submit', addTodo);
    // item remove
    todoList.addEventListener('click', removeItem);
    // clear all item
    todoClear.addEventListener('click', clearAllItem);
    // item complete
    todoList.addEventListener('click', todoComplete);
}

// 로컬 스토리지에서 todos 가져오기 // UI 동기화
function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        // class 더하기
        li.className = "todo"
        span.className = "todo-item"
        // text node 더하기
        let spanWithText = span.appendChild(document.createTextNode(todo));
        li.appendChild(spanWithText);
        // button 추가
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete'
        deleteBtn.innerHTML = "delete"
        li.appendChild(deleteBtn);
        // ul 부분에 추가 
        todoList.appendChild(li)
    })
}

// add todo function
function addTodo(e) {
    e.preventDefault();
    if(todoInput.value === '') {
        alert('form을 채워 임마')
    } else {
         // li tag
    const li = document.createElement('li');
    const span = document.createElement('span');
    // class 더하기
    li.className = "todo"
    span.className = "todo-item"
    // text node 더하기
    let liWithText = li.appendChild(document.createTextNode(todoInput.value));
    li.appendChild(liWithText);
    // button 추가
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete'
    deleteBtn.innerText = "delete"
    li.appendChild(deleteBtn);
    // ul 부분에 추가 
    todoList.appendChild(li);
    // console.log(li)

    // 로컬 스토리지에 저장
        storeTodo(todoInput.value);
    // clear input
    todoInput.value = '';
    }
   
}

function storeTodo(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}

function removeItem(e) {
    
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove(); 
        // localstorage 에서 remove
        removeTodoLocalStorage(e.target.parentElement);
    }
}

function removeTodoLocalStorage(todoItem) {
    console.log(todoItem);
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
     todos = JSON.parse(localStorage.getItem('todos'))
    }
    // todos = todos = JSON.parse(localStorage.getItem('todos'))

    todos.forEach(function(todo, index) {
        if(todos.indexOf(todo) > -1) {
            todos.splice(index)
        }
        localStorage.setItem('todos', JSON.stringify(todos))
    })
}

function clearAllItem() {
    while(todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    // localStorage Clear
    clearLocalStorage();
}

function clearLocalStorage() {
    localStorage.clear();
}

function todoComplete(e) {
    e.preventDefault();
    // console.log(e.target);
   e.target.classList.contains('complete') ? e.target.classList.remove('complete') : e.target.classList.add('complete')
}
 