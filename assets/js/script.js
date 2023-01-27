class taskModel {
    constructor(taskName, taskDesc, assignName, dueDate, taskStatus, taskID) {
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.assignName = assignName;
        this.dueDate = dueDate;
        this.taskStatus = taskStatus;
        this.taskID = taskID;
    }
}

let existingTaskList = JSON.parse(localStorage.getItem('taskList'));

var taskList = [];

let isExistingTasks = false;
if (existingTaskList != null) {
    if (existingTaskList.length != 0) {
        //console.log(existingTaskList);
        isExistingTasks = true;
        //alert("oh no");
        taskList = existingTaskList;
    
        validateForm();
        // document.getElementById('tname').innerHTML = existingTaskList[0].taskName;
    }
}

// window.onload = function () {
//     setTimeout(() => {
//         validateForm(true);
//     }, 1);
    
// }


function validateForm() {
    let a, b, c, d, e = "";
    if (isExistingTasks) {
        
        for (i = 0; i <= 4; i++) {
            if (existingTaskList[i] != undefined) {
                a = existingTaskList[i].taskName;
                b = existingTaskList[i].taskDesc;
                c = existingTaskList[i].assignName;
                d = existingTaskList[i].dueDate;
                e = existingTaskList[i].taskStatus;
                let nam = 'tname' + i;
                let des = 'tdesc' + i;
                let assi = 'tassign' + i;
                let dd = 'tdd' + i;
                let sta = 'status' + i;
                setTimeout(() => {
                document.getElementById(nam).innerHTML = a;
                document.getElementById(des).innerHTML = b;
                document.getElementById(assi).innerHTML = c;
                document.getElementById(dd).innerHTML = d;
                document.getElementById(sta).value = e; }, 1);
            }
        }
        isExistingTasks = false;

    } else {
        let x = "";
        let y = "";
        setTimeout(() => {
            x = document.forms["task"]["assign"].value;
        }, 1);
        
        if (/\d/.test(x)) {
            alert("Please enter a name in the Assigned To: field");
            return false;
            
        }
        setTimeout(() => {
            y = document.forms["task"]["date"].value.length;
        }, 1);
        
        //console.log(y);
        if (y != 10) {
            console.log(document.forms["task"]["date"].value);
            alert("Please enter a valid date, with a 4 digit year, 2 digit month, and 2 digit day");
            return false;
        }
        //document.getElementById("tname").innerHTML = a;
        a = document.forms["task"]["taskname"].value;
        b = document.forms["task"]["taskdesc"].value;
        c = document.forms["task"]["assign"].value;
        d = document.forms["task"]["date"].value;
        e = "TODO";

        let newTask = new taskModel(a, b, c, d, e, 999);
        console.log(taskList[0]);
        // for (let i = 0; i <= 5, i++;) {
        //     if (taskList[i] == undefined) {
        //         taskList[i] = newTask;
        //         i = 6;
        //     }
        //     if (i == 5) {
        //         taskList.push(newTask);
        //     }
            
        // }
        taskList.push(newTask);
        if (taskList.indexOf(newTask) > 4) {
            alert("Please limit your task management to five tasks at maximum");
            taskList.pop();
        }

        newTask.taskID = taskList.indexOf(newTask);
        taskList[taskList.indexOf(newTask)] = newTask;

        console.log(taskList);
        let stringList = JSON.stringify(taskList);
        localStorage.setItem("taskList", stringList);

        for (i = 0; i <= 4; i++) {
            setTimeout(() => { document.getElementById('tname' + i).innerHTML = a;
            document.getElementById('tdesc' + i).innerHTML = b;
            document.getElementById('tassign' + i).innerHTML = c;
            document.getElementById('tdd' + i).innerHTML = d;
            document.getElementById('status' + i).value = e; }, 1);
        }

    }
    //console.log(taskList);
    
    let stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);

    //alert("hehehe");
    return false;
        
}

function updateTask() {

    taskList[0].taskStatus = document.forms["update"]["status0"].value;
    // taskList[0].taskStatus = document.forms["update"]["status0"].value;
    // taskList[0].taskStatus = document.forms["update"]["status0"].value;
    // taskList[0].taskStatus = document.forms["update"]["status0"].value;
    // taskList[0].taskStatus = document.forms["update"]["status0"].value;
    console.log(taskList[0]);
    //alert("hahaha");
    let stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);
    return false;

}


//let testTask = new taskModel("Finish JS", "Work on the JavaScript portion of the project to bring functionality to the task manager", "Haani", "12/25/2022", "TODO");
//let z = new taskModel(document.forms["task"]["taskname"].value, document.forms["tasks"]["taskdesc"].value, document.forms["tasks"]["assign"].value, document.forms["tasks"]["date"].value, "TODO");
