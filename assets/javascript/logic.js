var textBoxArr = document.getElementsByClassName("description");
var textArea;
var tasks;
console.log(textBoxArr);

var makeTextArea = function() {
    for (i = 0; i < textBoxArr.length; i++) {
        textArea = document.createElement("textarea");
        textArea.classList.add("toDos");
        textArea.innerText = "Add a task here!";
        textBoxArr[i].appendChild(textArea);
    }
};

$(".saveBtn").on("click", function() {

    console.log(textArea.innerText);
});

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

makeTextArea();
