var textBoxArr = document.getElementsByClassName("description");
var textArea;
var times = [900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];

//this loops through the array created by variable on line 1, that is made up of hardcoded HTML elements.
//The loop dynamically generates textareas for you to add tasks.
var makeTextArea = function() {
    for (i = 0; i < textBoxArr.length; i++) {
        textArea = document.createElement("textarea");
        textArea.classList.add(times[i]);
        textBoxArr[i].appendChild(textArea);
    }
};

//When the save button is clicked, your task is saved to localStorage
$(".saveBtn").on("click", function(event) {
    var captureSave = event.target.attributes[0].value;
    var task = $("." + captureSave).val();
    localStorage.setItem(captureSave, task);
});

//This function loops through the local storage to display your tasks once the page is refreshed
var displayTasks = function() {
    for (i = 0; i < times.length; i++) {
        $("." + times[i]).val(localStorage.getItem(times[i]));
        var currentTime = moment().format("HH");
        currentTime = currentTime + "00";
        console.log(currentTime, times[i]);

        //these statements change the background color of the tasks
        if (currentTime > times[i]) {
            $("." + times[i]).addClass("past");
        }
        else if (currentTime < times[i]) {
            $("." + times[i]).addClass("future");
        }
        else if (currentTime == times[i]) {
            $("." + times[i]).addClass("present");
        }
    }

};


//This prints the date at the top of the screen
var printTopDate = function() {
    var currentDate = moment().format('dddd, MMMM Do');
        $("#currentDay").text(currentDate);
};

printTopDate();
makeTextArea();
displayTasks();