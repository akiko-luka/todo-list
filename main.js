console.log("worksss!");

const form = document.getElementById("add-task");
const ul = document.getElementById("tasks");

function handleSubmitButton(event) {
  event.preventDefault();
  const message = document.getElementById("description");
  const textInput = message.value;

  const li = document.createElement("li");
  const checkButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  checkButton.classList.add("check");
  checkButton.textContent = "Check";
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";

  li.textContent = `${textInput}`;
  ul.appendChild(li);
  li.appendChild(checkButton);
  li.appendChild(deleteButton);

  console.log(checkButton);
  console.log(deleteButton);

  message.value = "";
}

function handleCheck(event) {
  if (event.target.matches("li")) {
    if (event.target.style.textDecoration === "line-through") {
      event.target.style.textDecoration = "none";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  } else if (event.target.matches(".delete")) {
    const li = event.target.closest("li");
    li.remove();
  }
}

form.addEventListener("submit", handleSubmitButton);
document.addEventListener("click", handleCheck);
