function saveCourse() {
    event.preventDefault();

    var courseName = document.getElementById("courseNameInput").value;
    var instructor = document.getElementById("instructorInput").value;
    var description = document.getElementById("descriptionInput").value;

    var courseListTable = document.getElementById("courseListTable");
    var newRow = courseListTable.insertRow();
    newRow.innerHTML = "<td>" + courseName + "</td>" +
        "<td>" + instructor + "</td>" +
        "<td>" + description + "</td>" +
        "<td><button onclick='deleteCourse(event)' >Delete</button></td>";

    document.getElementById("courseNameInput").value = "";
    document.getElementById("instructorInput").value = "";
    document.getElementById("descriptionInput").value = "";
}

function deleteCourse(event) {
    event.target.parentElement.parentElement.remove();
}

function enrollStudent() {
    event.preventDefault();

    var studentName = document.getElementById("studentNameInput").value;
    var studentEmail = document.getElementById("studentEmailInput").value;
    var course = document.getElementById("courseSelect").value;


    document.getElementById("studentNameInput").value = "";
    document.getElementById("studentEmailInput").value = "";
}

var courses = ["Math", "Science", "History"];

var select = document.getElementById("courseSelect");
for (var i = 0; i < courses.length; i++) {
    var option = document.createElement("option");
    option.text = courses[i];
    select.add(option);
}
function enrollStudent() {
    event.preventDefault();

    var studentName = document.getElementById("studentNameInput").value;
    var studentEmail = document.getElementById("studentEmailInput").value;
    var course = document.getElementById("courseSelect").value;

    alert("Student enrolled successfully!");

    document.getElementById("studentNameInput").value = "";
    document.getElementById("studentEmailInput").value = "";
}
