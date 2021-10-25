// //alert("Javascript has been included successfully");

// // //const tasks = [{
// //     content: "Take out the trash.",
// //     completed: true
// //   }, {
// //     content: "Brush your teeth.",
// //     completed: false
// //   }, {
// //     content: "Take over the world.",
// //     completed: false
// // }];

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

//Call to add test task "git bread" to list as not completed.
//appendNewTaskToDom("git bread", false);

const handleNewTask = () => {
  const formInput = document.querySelector("#addForm");
  if (!formInput) {
    console.log("Parent element not found");
    return;
  }
  const formButton = document.querySelector("#addButton");
  if (!formButton) {
    console.log("Parent element not found");
    return;
  }
  const userTaskInput = formInput.value;
  formButton.preventDefault;
  formButton.addEventListener("click", ()=> console.log("test"));
}