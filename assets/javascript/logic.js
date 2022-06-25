var textBoxArr = document.getElementsByClassName("description");
var tasks;
console.log(textBoxArr);

var makeTextArea = function() {
    for (i = 0; i < textBoxArr.length; i++) {
        textArea = document.createElement("textarea");
        textBoxArr[i].appendChild(textArea);
    }
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

makeTextArea();
