// times table function. accepts a times table number and table size from user and displays the times table using a while loop//

function timesTable(timesTableNum, tableSize) {
    var timesTableNum = parseInt(document.getElementById("timesTableNumInput").value);
    var tableSize = parseInt(document.getElementById("timesTableSizeInput").value);
    var ans = 0;
    var i = 0;
    var output = "";
    while (i <= tableSize) {
        ans = timesTableNum * i;
        output += timesTableNum + " x " + i + " = " + ans + "<br>";
        i++;
    }
    document.getElementById("timesTableDiv").innerHTML = output;
}

// Can you Ride function. Determine if a rider can ride space mountain by themselves. Conditions=Must be 7 and 40 in
function canJoin(age, height) {
    var age = parseInt(document.getElementById("applicantAge").value);
    var height = parseInt(document.getElementById("applicantHeight").value);
    var output = "";
    if (age >= 12 && height >= 80) {
        output = "Hooray! You can join boys scout by yourself!";
    } else if (height >= 80) {
        output = "Not quite old enough, but don't give up! You can still join with the consent of your parents!";
    } else {
        output = "I am sorry you must be over 80 inches to ride, and 12 or older to ride by yourself";
    }
    document.getElementById("joinDiv").innerHTML = output;
}
var join = new Array(4);
var join = ["Boys Brigade", "Church Lads Brigade", "YMCA Boy Scouts", "Chums Scout Patrols"];

function addApplicant() {
    newArrayJoin = document.getElementById("newApplicant").value;
    join.push(newArrayJoin);
    document.getElementById("joinArrayDiv").innerHTML = join.toString();
}

function addNew() {
    join[4] = "New Scout";
    document.getElementById("updatedJoinDiv").innerHTML = join.toString();
}
