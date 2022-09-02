let input = document.querySelector(".input_wrapper input");

let button = document.querySelector(".input_wrapper button");

let taskList = document.querySelector(".task_wrapper ul");

// Functions
let addTask = () => {
  let newTask = input.value;
  if (newTask !== "") {
    taskList.innerHTML +=
      '<li><div class="task"><div class="task_value">' +
      newTask +
      '</div><div class="task_options"><input type="checkbox" name="isTaskDone"><span>&Cross;</span></div></div>';
    localStorage.setItem("tasks", JSON.stringify(taskList.innerHTML));
    input.value = "";
    updateCheckbox();
    updateCross();
  }
};

let updateCheckbox = () => {
  let checkbox = document.querySelectorAll(".task_options input");
  checkbox.forEach(checkboxItem => {
    checkboxItem.addEventListener("click", toggleCompleted);
  });
};

let toggleCompleted = e => {
  e.target.parentElement.parentElement.children[0].classList.toggle("done");
  localStorage.setItem("tasks", JSON.stringify(taskList.innerHTML));
};

let updateCross = () => {
  let cross = document.querySelectorAll(".task_options span");
  cross.forEach((crossItem) => {
    crossItem.addEventListener("click", removeTask);
  });
};

let removeTask = e => {
  e.target.parentElement.parentElement.parentElement.innerHTML = "";
  localStorage.setItem("tasks", JSON.stringify(taskList.innerHTML));
};

let populateUI = () => {
  taskList.innerHTML = JSON.parse(localStorage.getItem("tasks"));
};

populateUI();
updateCheckbox();
updateCross();
// Event Listeners
button.addEventListener("click", addTask);
