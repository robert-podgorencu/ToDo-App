const addButton = document.getElementById("submit-button");
const inputText = document.getElementById("new-task");
const pendingTasksList = document.getElementById("pending-list");
const completedTasksList = document.getElementById("completed-list");


function addTask() {
  const newListItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  const deleteButton = document.createElement("button");

  newListItem.append(checkBox, label, deleteButton);
  const listChildren = newListItem.children;

  for (let i = 0; i < listChildren.length; i++) {
    listChildren[i].className = "list-item";
  }

  checkBox.type = "checkbox";
  checkBox.id = "complete-task";
  label.id = "item-title";
  label.innerText = inputText.value;
  deleteButton.id = "delete-button";
  deleteButton.innerText = "Delete";

  pendingTasksList.appendChild(newListItem);
  addEventListenerToNewDelButton(deleteButton);
  checkBox.addEventListener("change", (event) => moveTask(event));
}

function moveTask(event) {
  const currentItem = event.target.parentNode;
  const currentList = currentItem.parentNode;
  if (currentList === pendingTasksList) {
    completedTasksList.appendChild(currentItem);
  } else {
    pendingTasksList.appendChild(currentItem);
  }
}

  function addEventListenerToNewDelButton(button) {
    button.addEventListener("click", (event) => {
      const currentItem = event.target.parentNode;
      const currentList = currentItem.parentNode;
      currentList.removeChild(currentItem);
    });
  }

addButton.addEventListener("click", () => {
  addTask();
});

