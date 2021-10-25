const formInput = document.querySelector("#addForm");
const addNewForm = document.querySelector("#fuckingForm");

//appendNewTaskToDom(taskDescription: string, completed: boolean = false) -> void';
const appendNewTaskToDom = (taskInput, completed = false) => {
  const taskListUl = document.querySelector("#taskList");
  if (!taskListUl) {
    console.log("Parent element not found");
    return;
  }
  const newListTask = document.createElement("li");
  newListTask.classList.add("flexBoxList");
  if (!completed) {
    newListTask.innerHTML =
      `
        <div class="task taskDefault">` +
      taskInput + //can use ${} instead of +
      `
        </div>
        <div class="controls">
          <div class="deleteButton"><img src="./images/trash.svg" alt="Delete Button" /></div>
        </div>
        `;
  } else {
    newListTask.innerHTML =
      `
    <div class="task taskComplete">` +
      taskInput +
      `
    </div>
    <div class="controls">
      <div class="deleteButton"><img src="./images/trash.svg" alt="Delete Button" /></div>
    </div>
    `;
  }
  taskListUl.appendChild(newListTask);
};

//handlers handle events and can recieve e which is provided from event listener. 
//e can be named anything you want, e is convention. (e can be defined elsewhere, common name for error)
const handleNewTask = (e) => {
  e.preventDefault();
  appendNewTaskToDom(e.target.elements.addForm.value);
  e.target.elements.addForm.value = "";
}

addNewForm.addEventListener("submit", handleNewTask);