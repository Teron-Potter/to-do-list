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
      taskInput +
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

appendNewTaskToDom("git bread", false);
