const taskArray = [
  {
    task: "This task it populated from an array of objects.",
    completed: true,
  },
  {
    content: "As is this one!",
    completed: false,
  },
  {
    content: "Yep, this one too...",
    completed: false,
  },
];

//appendNewTaskToDom(taskDescription: string, completed: boolean = false) -> void';
const appendNewTaskToDom = (taskInput, completed = true) => {
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
      taskInput +
      `
        </div>
        <div class="controls">
          <div class="deleteButton"><i class="fas fa-trash"></i></div>
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
      <div class="deleteButton"><i class="fas fa-trash"></i></div>
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
};

const loadData = (taskArray) => {
  for (let count = 0; count < taskArray.length; count++) {
    console.log(taskArray[count]);
  }
};

window.onload = function () {
  const addNewForm = document.querySelector("#fuckingForm");
  if (!addNewForm) {
    console.error("form not found");
    return;
  }
  loadData(taskArray);
  addNewForm.addEventListener("submit", handleNewTask);
};
