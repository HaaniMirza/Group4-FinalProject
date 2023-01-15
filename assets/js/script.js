class taskModel {
    constructor(taskName, taskDesc, assignName, dueDate, taskStatus) {
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.assignName = assignName;
        this.dueDate = dueDate;
        this.taskStatus = taskStatus;
    }
}

let existingTaskList = JSON.parse(localStorage.getItem('taskList'));
var taskList = [];
let isExistingTasks = false;
if (existingTaskList != null) {
    console.log(existingTaskList);
    isExistingTasks = true;
    //alert("oh no");
    taskList.push(existingTaskList[0]);

    validateForm();
    // document.getElementById('tname').innerHTML = existingTaskList[0].taskName;
}


function validateForm() {
    let a, b, c, d, e = "";
    if (isExistingTasks) {
        
        a = existingTaskList[0].taskName;
        b = existingTaskList[0].taskDesc;
        c = existingTaskList[0].assignName;
        d = existingTaskList[0].dueDate;
        e = existingTaskList[0].taskStatus;
    } else {
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
        a = document.forms["task"]["taskname"].value;
        b = document.forms["task"]["taskdesc"].value;
        c = document.forms["task"]["assign"].value;
        d = document.forms["task"]["date"].value;
        e = "TODO";

        let newTask = new taskModel(a, b, c, d, e);
        taskList.push(newTask);
    }
    console.log(taskList);
    setTimeout(() => { document.getElementById('tname').innerHTML = a;
    document.getElementById('tdesc').innerHTML = b;
    document.getElementById('tassign').innerHTML = c;
    document.getElementById('tdd').innerHTML = d;
    document.getElementById('status').value = e; }, 1);
    
    
    let stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);

    //alert("hehehe");
    return false;
        
}

function updateTask() {

    taskList[0].taskStatus = document.forms["update"]["status"].value;
    console.log(taskList[0]);
    //alert("hahaha");
    let stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);
    return false;

}


//let testTask = new taskModel("Finish JS", "Work on the JavaScript portion of the project to bring functionality to the task manager", "Haani", "12/25/2022", "TODO");
//let z = new taskModel(document.forms["task"]["taskname"].value, document.forms["tasks"]["taskdesc"].value, document.forms["tasks"]["assign"].value, document.forms["tasks"]["date"].value, "TODO");
