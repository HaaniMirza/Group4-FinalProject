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
    
        //validateForm();
        // document.getElementById('tname').innerHTML = existingTaskList[0].taskName;
    }
}

// window.onload = function () {
//     setTimeout(() => {
//         validateForm(true);
//     }, 1);
    
// }
if (isExistingTasks) {
    if (existingTaskList[0] != null && existingTaskList[0] != undefined) {
        setTimeout(() => {
            document.getElementById("tname0").innerHTML = existingTaskList[0].taskName;
            document.getElementById("tdesc0").innerHTML = existingTaskList[0].taskDesc;
            document.getElementById("tassign0").innerHTML = existingTaskList[0].assignName;
            document.getElementById("tdd0").innerHTML = existingTaskList[0].dueDate;
            document.getElementById("status0").value = existingTaskList[0].taskStatus;
       }, 1)  
    }
    
    if (existingTaskList[1] != null && existingTaskList[1] != undefined) {
        setTimeout(() => {
            document.getElementById("tname1").innerHTML = existingTaskList[1].taskName;
            document.getElementById("tdesc1").innerHTML = existingTaskList[1].taskDesc;
            document.getElementById("tassign1").innerHTML = existingTaskList[1].assignName;
            document.getElementById("tdd1").innerHTML = existingTaskList[1].dueDate;
            document.getElementById("status1").value = existingTaskList[1].taskStatus;
       }, 1)  
    }
    
    if (existingTaskList[2] != null && existingTaskList[2] != undefined) {
        setTimeout(() => {
            document.getElementById("tname2").innerHTML = existingTaskList[2].taskName;
            document.getElementById("tdesc2").innerHTML = existingTaskList[2].taskDesc;
            document.getElementById("tassign2").innerHTML = existingTaskList[2].assignName;
            document.getElementById("tdd2").innerHTML = existingTaskList[2].dueDate;
            document.getElementById("status2").value = existingTaskList[2].taskStatus;
       }, 1)  
    }
    
    if (existingTaskList[3] != null && existingTaskList[3] != undefined) {
        setTimeout(() => {
            document.getElementById("tname3").innerHTML = existingTaskList[3].taskName;
            document.getElementById("tdesc3").innerHTML = existingTaskList[3].taskDesc;
            document.getElementById("tassign3").innerHTML = existingTaskList[3].assignName;
            document.getElementById("tdd3").innerHTML = existingTaskList[3].dueDate;
            document.getElementById("status3").value = existingTaskList[3].taskStatus;
       }, 1)  
    }
    
    if (existingTaskList[4] != null && existingTaskList[4] != undefined) {
        setTimeout(() => {
            document.getElementById("tname4").innerHTML = existingTaskList[4].taskName;
            document.getElementById("tdesc4").innerHTML = existingTaskList[4].taskDesc;
            document.getElementById("tassign4").innerHTML = existingTaskList[4].assignName;
            document.getElementById("tdd4").innerHTML = existingTaskList[4].dueDate;
            document.getElementById("status4").value = existingTaskList[4].taskStatus;
       }, 1)  
    }
}

function validateForm() {
    let a, b, c, d, e = "";
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
        console.log(y);
    }, 1);
        
    //console.log(y);
    if (y > 10) {
        console.log(document.forms["task"]["date"].value);
        console.log(document.forms["task"]["date"].value.length);
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
    for (let i = 0; i < 5; i++) {
        if (taskList[i] == null) {
            taskList[i] = newTask;
            i = 10;
        } else if (taskList[i] == undefined) {
            taskList[i] = newTask;
            i = 10;
        }
    }
    // taskList.push(newTask);
    if (taskList.indexOf(newTask) > 4 || taskList.indexOf(newTask) < 0) {
        alert("Please limit your task management to five tasks at maximum");
        taskList.pop();
    }
    console.log(taskList.indexOf(newTask));
    newTask.taskID = taskList.indexOf(newTask);
    taskList[taskList.indexOf(newTask)] = newTask;

    console.log(taskList);
    let stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);
        
    let l = taskList.indexOf(newTask);

    let f = document.getElementById('tname' + l);
    let g = document.getElementById('tdesc' + l);
    let h = document.getElementById('tassign' + l);
    let j = document.getElementById('tdd' + l);
    let k = document.getElementById('status' + l);
    setTimeout(() => { f.innerHTML = a;
    g.innerHTML = b;
    h.innerHTML = c;
    j.innerHTML = d;
    k.value = e; }, 1);
        
    // for (i = 0; i <= 4; i++) {
    //     let f = document.getElementById('tname' + i);
    //     let g = document.getElementById('tdesc' + i);
    //     let h = document.getElementById('tassign' + i);
    //     let j = document.getElementById('tdd' + i);
    //     let k = document.getElementById('status' + i);
    //     setTimeout(() => { f.innerHTML = a;
    //     g.innerHTML = b;
    //     h.innerHTML = c;
    //     j.innerHTML = d;
    //     k.value = e; }, 1);
    // }

    
    //console.log(taskList);
    
    stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);

    //alert("hehehe");
    return false;
        
}

function updateTask(i) {
    console.log(i);
    //alert("asjldfajsldjfl;a");
    taskList[i].taskStatus = document.forms["update" + i]["status" + i].value;
    console.log(taskList[i]);
    
    
    let stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);
    //alert("hahaha");
    // location.reload();

}

function deleteTask(i) {
    console.log(i);
    //alert("no");
    taskList[i] = undefined;
    console.log(taskList);
    let stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);
    location.reload();

}
//let testTask = new taskModel("Finish JS", "Work on the JavaScript portion of the project to bring functionality to the task manager", "Haani", "12/25/2022", "TODO");
//let z = new taskModel(document.forms["task"]["taskname"].value, document.forms["tasks"]["taskdesc"].value, document.forms["tasks"]["assign"].value, document.forms["tasks"]["date"].value, "TODO");
