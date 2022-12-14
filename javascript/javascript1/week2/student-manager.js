const class07Students = []; //Create an empty class array

function addStudentToClass(studentName) {

    // Check if the studentName is filled
    if (studentName) {
        // Check if the class is full
        if (class07Students.length < 6) {
            if (class07Students.includes(studentName)) {
                console.log("Student " + studentName + " is already in the class");
            } else {
                class07Students.push(studentName);
                console.log(class07Students);
            }
        } else {
            // Add Queen to the class even if the class is full
            if (studentName === "Queen") {
                class07Students.push(studentName);
                console.log(class07Students)
            } else {
                console.log("Cannot add more students to class 07");
            }
        }
    } else {
        console.log("Please enter student name");
    }

}

// Function for getting number of students in class
function getNumberOfStudents(newArray) {
    console.log(newArray.length);
}

addStudentToClass();
addStudentToClass("John");
addStudentToClass("Mima");
addStudentToClass("Gasper");
addStudentToClass("June");
addStudentToClass("May");
addStudentToClass("Queen");


getNumberOfStudents(class07Students);