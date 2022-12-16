

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
    }
    return false;
}