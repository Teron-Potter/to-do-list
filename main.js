//alert("Javascript has been included successfully");

// //const tasks = [{
//     content: "Take out the trash.",
//     completed: true
//   }, {
//     content: "Brush your teeth.",
//     completed: false
//   }, {
//     content: "Take over the world.",
//     completed: false
// }];

function readForm() {
    var x = document.getElementById("addForm");
    var text = "";
    var i;
    for (i = 0; i < x.length ; i++) {
        text += x.elements[i].value;
    }
    console.log(text);
}

window.onload = readForm();