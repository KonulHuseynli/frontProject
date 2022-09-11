const addStudentBtn = document.getElementById("add");
const tableBody = document.getElementById("table-body");
let studentList = [];
let targetStudentId;

function generateId() {
    return Math.floor(Math.random() * 1000);
} 
function isDataValid(student) {
    // if(Boolean(student.name) && Boolean(student.surname) && Boolean(student.birthday) && Boolean(student.age)) {
    //     return true
    // } else {
    //     return false
    // }

    return Boolean(student.name) && Boolean(student.surname) && Boolean(student.birthday) && Boolean(student.age)
}

function addActions() {
    console.log(studentList);
    studentList.map(student => {
        console.log(document.getElementById(student.id));
    })
}

function setActions(targetStudent) {
    function deleteStudent() {
        const newStudentList = studentList.filter(student => student.id !== targetStudent.id);
        studentList = newStudentList;
        renderStudentList();
    };
    function editStudent() {
        addStudentBtn.innerText = "Edit Student";
        addStudentBtn.className = "student-content__edit-btn"
        document.getElementById("name").value = targetStudent.name,
        document.getElementById("surname").value = targetStudent.surname,
        document.getElementById("birthday").value = targetStudent.birthday,
        document.getElementById("age").value = targetStudent.age,
        targetStudent.gender === "F" ? document.getElementById("genderF").checked = true : document.getElementById("genderM").checked = true;
        targetStudentId = targetStudent.id;
    };
    document.getElementById(targetStudent.id+"-delete").addEventListener('click', deleteStudent);
    document.getElementById(targetStudent.id + "-edit").addEventListener('click', editStudent);
}


function renderStudentList() {
    tableBody.innerHTML = "";
    studentList.map((student) => {
        const studentRow = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.surname}</td>
                <td>${student.birthday}</td>
                <td>${student.age}</td>
                <td>${student.gender === "M" ? "Male" : "Female"}</td>
                <td>
                    <img src="./icons/delete.png" alt="delete" id=${student.id}-delete>
                    <img src="./icons/edit.png" alt="edit" id=${student.id}-edit>
                </td>
            </tr>
        `;
        // targetStudentId=student.id;
        tableBody.insertAdjacentHTML("beforeend", studentRow);
        setActions(student);
    })
    // addActions();
}

addStudentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const addMode =  addStudentBtn.innerText === "Add student";
    if(addMode) {
        const newStudent = {
            id: generateId(),
            name: document.getElementById("name").value,
            surname: document.getElementById("surname").value,
            birthday: document.getElementById("birthday").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("genderM").checked ? "M" : "F"
        }
        if(isDataValid(newStudent)) {
            document.getElementById("student-form").reset();
            studentList.push(newStudent);
            renderStudentList();
        } else {
            console.log("PLEASE FILL THE DATA");
        }
    } else {
        console.log("target", targetStudentId);
    }
})