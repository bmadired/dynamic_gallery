const students = [];
 function insertStudent() {
    const name = document.getElementById("name").value;
    const idNumber = document.getElementById("idNumber").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    if (name && idNumber && age && course) {
        const student = { name, idNumber, age, course };
        students.push(student);
        alert("Student information inserted successfully!");
        document.getElementById("name").value = "";
        document.getElementById("idNumber").value = "";
        document.getElementById("age").value = "";
        document.getElementById("course").value = "";
    } else {
        alert("Please fill in all the fields.");
    }
 }
 function showStudentInfo() {
    let studentInfo = "<h3>Student Entries:</h3>";
    if (students.length === 0) {
        studentInfo += "<p>No student information available.</p>";
    } else {
        students.forEach((student, index) => {
            studentInfo += `
                <div>
                    <h4>Student ${index + 1}</h4>
                    <p>Name: ${student.name}</p>
                    <p>ID Number: ${student.idNumber}</p>
                    <p>Age: ${student.age}</p>
                    <p>Course: ${student.course}</p>
                    <hr>
                </div>
            `;
        });
    }
    document.getElementById("demo_div").innerHTML = studentInfo;
 }