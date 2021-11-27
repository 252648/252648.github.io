const TodoForm = document.querySelector(".todoForm");
const TodoInput = document.querySelector(".todoForm input");
const TodoList = document.querySelector("#todoList");
const TODOS_KEY = "todos";

let Todos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(Todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  Todos = Todos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

function paintTodo(whattodo) {
  const li = document.createElement("li");
  li.id = whattodo.id;
  const span = document.createElement("span");
  span.innerText = whattodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  TodoList.appendChild(li);
}

function TodoWrite(event) {
  event.preventDefault();
  const whattodo = TodoInput.value;
  TodoInput.value = "";
  const newTodo = {
    text: whattodo,
    id: Date.now(),
  };
  Todos.push(newTodo);
  paintTodo(newTodo);
  saveTodo();
}

TodoForm.addEventListener("submit", TodoWrite);

const saveTodos = localStorage.getItem(TODOS_KEY);
console.log(saveTodos);
if (saveTodos !== null) {
  const parsedToDos = JSON.parse(saveTodos);
  Todos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
