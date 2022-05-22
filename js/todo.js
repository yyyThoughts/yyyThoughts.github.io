const todoForm = document.querySelector("#todo-form");
const inputTodo = todoForm.querySelector("#inputTodo");
const todosBtn = todoForm.querySelector("input:last-child");

const todoList = document.querySelector("#todo-list");
let todoKey;
let toDos = [];

function displayTodos(inputID) {
    todoKey = `todo${inputID}`;
    todoForm.classList.remove("hidden");
    let parsed = localStorage.getItem(todoKey);
    if (parsed === null) {
        toDos = JSON.parse("[]");
    } else {
        toDos = JSON.parse(parsed);
    }

    toDos.forEach(paintTodo);
}

function saveTodos(todoKey) {
    localStorage.setItem(todoKey, JSON.stringify(toDos));
}

function handleTodosButton(event) {
    event.preventDefault();
    const newTodo = inputTodo.value;
    inputTodo.value = "";
    const newTodoObj = {
        text : newTodo,
        toDoId : Date.now(),
    }
    toDos.push(newTodoObj);
    saveTodos(todoKey);
    paintTodo(newTodoObj);

}

function handleDeleteTodo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.toDoId !== parseInt(li.id));
    saveTodos(todoKey);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.toDoId;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    li.append(span);
    const delBtn = document.createElement("button");
    delBtn.innerText = "삭제";
    delBtn.addEventListener("click", handleDeleteTodo);
    li.append(delBtn);

    todoList.appendChild(li);
}

todosBtn.addEventListener("click", handleTodosButton);
