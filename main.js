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
const appendNewTaskToDom = () => {
  const taskListUl = document.querySelector("#taskList");
  if (!taskListUl) { 
    console.log("Parent element not found");
    return;
  }
  const newListTask = document.createElement("li");
    newListTask.classList.add("flexBoxList");
    newListTask.innerHTML = `
      <div class="task taskDefault">
        This is a test 1 2 3.
      </div>
      <div class="controls">
        <div class="deleteButton"><img src="./images/trash.svg" alt="Delete Button" /></div>
      </div>
      `;
    taskListUl.appendChild(newListTask);
}

appendNewTaskToDom();