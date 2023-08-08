const input = document.querySelector("#task");
const addTask = document.querySelector("#add-task");
const taskList = document.querySelector("#taskList");

//adding a new todo task in the list
const createTaskItem = (taskValue) => {
  const taskItem = document.createElement("li");
  taskItem.innerText = taskValue;
  taskList.appendChild(taskItem);
};

//adding todo in the list
const addTaskToList = () => {
  const taskValue = input.value;

  //checking if the input value is an empty string or not
  if (taskValue.trim() !== "") {
    createTaskItem(taskValue);

    input.value = "";
  }
};

addTask.addEventListener("click", addTaskToList);
