var tasks = {};
var textBoxArr = document.getElementsByClassName("description");
var tasks;
var textArea;
console.log(textBoxArr);

var makeTextArea = function() {
    for (i = 0; i < textBoxArr.length; i++) {
        textArea = document.createElement("textarea");
        textArea.classList.add("toDos")
        textBoxArr[i].appendChild(textArea);
    }
};

$(".saveBtn").on("click", function() {


    tasks = textArea.text;
    console.log(tasks);
    saveTasks();
  });

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

makeTextArea();
