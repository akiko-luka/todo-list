console.log("it works!");

const input = document.querySelector(".input");
const todoBtn = document.querySelector(".todo-btn");
const list = document.querySelector(".list");

// functions
function handleAdd(e) {
  e.preventDefault();

  const todoList = document.createElement("div");
  todoList.classList.add("todoList");
  const task = document.createElement("li");
  task.innerText = input.value;

  task.classList.add("new-todo");
  todoList.appendChild(task);

  // check button
  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

  checkBtn.classList.add("check-btn");
  todoList.appendChild(checkBtn);

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  deleteBtn.classList.add("delete-btn");
  todoList.appendChild(deleteBtn);

  list.appendChild(todoList);
  input.value = "";
}

function handleButtons(e) {
  // console.log(e.target);
  const item = e.target;

  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("delete-animation") //falling
    // to execute remove function after animation
    todo.addEventListener("transitionend", function(){
      todo.remove()
    })
  }

  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    todo.style.textDecoration = "line-through"
    todo.style.opacity = 0.5
  }
}

// Event Listeners
todoBtn.addEventListener("click", handleAdd);
list.addEventListener("click", handleButtons);
