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

    //saving the task in the Local storage

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskValue);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

//update the task from local storage

const initializeTaskList = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => createTaskItem(task));
};

addTask.addEventListener("click", addTaskToList);

initializeTaskList();
