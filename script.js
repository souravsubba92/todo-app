const input = document.querySelector("#task");
const addTask = document.querySelector("#add-task");
const taskList = document.querySelector("#taskList");

//adding a new todo task in the list
const createTaskItem = (taskValue) => {
  const taskItem = document.createElement("li");
  taskItem.innerText = taskValue;

  //creating delete button and adding it with task
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "delete";

  deleteButton.addEventListener("click", () => deleteTask(taskValue));
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
};

//adding todo in the list
const addTaskToList = () => {
  const taskValue = input.value;

  //checking if the input value is an empty string or not
  if (taskValue.trim() !== "") {
    createTaskItem(taskValue);

    input.value = "";

    //saving the task in the Local storage

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskValue);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

const deleteTask = (taskValue) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTask = tasks.filter((task) => task !== taskValue);
  localStorage.setItem("tasks", JSON.stringify(updatedTask));
  taskList.innerHTML = "";
  initializeTaskList();
};

//update the task from local storage

const initializeTaskList = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => createTaskItem(task));
};

addTask.addEventListener("click", addTaskToList);

initializeTaskList();
