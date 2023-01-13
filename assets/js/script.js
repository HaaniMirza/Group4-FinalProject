class taskModel {
    constructor(taskName, taskDesc, assignName, dueDate, taskStatus) {
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.assignName = assignName;
        this.dueDate = dueDate;
        this.taskStatus = taskStatus;
    }
}

var taskList;
var newTask;

function validateForm() {
    let x = document.forms["task"]["assign"].value;
    if (/\d/.test(x)) {
        alert("Please enter a name in the Assigned To: field");
        return false;
    }

    let y = document.forms["task"]["date"].value.length;
    //console.log(y);
    if (y != 10) {
        alert("Please enter a valid date, with a 4 digit year, 2 digit month, and 2 digit day");
        return false;
    }
    //document.getElementById("tname").innerHTML = a;
    let a = document.forms["task"]["taskname"].value;
    let b = document.forms["task"]["taskdesc"].value;
    let c = document.forms["task"]["assign"].value;
    let d = document.forms["task"]["date"].value;
    
    newTask = new taskModel(a, b, c, d, "TODO");
    //taskList += newTask;
    //console.log(taskList);
    document.getElementById('tname').innerHTML = a;
    document.getElementById('tdesc').innerHTML = b;
    document.getElementById('tassign').innerHTML = c;
    document.getElementById('tdd').innerHTML = d;

    //console.log(newTask);
    alert("hehehe");
    return false;
        
}

function updateTask() {
    newTask.taskStatus = document.forms["update"]["status"].value;
    console.log(newTask);
    alert("hahaha");
    return false;
}


//let testTask = new taskModel("Finish JS", "Work on the JavaScript portion of the project to bring functionality to the task manager", "Haani", "12/25/2022", "TODO");
//let z = new taskModel(document.forms["task"]["taskname"].value, document.forms["tasks"]["taskdesc"].value, document.forms["tasks"]["assign"].value, document.forms["tasks"]["date"].value, "TODO");
