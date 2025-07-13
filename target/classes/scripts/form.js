

let employeeData = [];
let cardBeingEditedIndex = null;

function openForm() {
    document.getElementById("employeeForm").style.display = "block";
}

function closeForm() {
    document.getElementById("employeeForm").style.display = "none";
    document.querySelector("#employeeForm form").reset();
    cardBeingEditedIndex = null;
}

window.onclick = function(event) {
    if (event.target === document.getElementById("employeeForm")) {
        closeForm();
    }
};

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const department = form.department.value;
    const role = form.role.value;

    if (!firstName || !lastName || !email || !department || !role) {
        alert("Please fill all fields.");
        return;
    }

    const newEmployee = { firstName, lastName, email, department, role };

    if (cardBeingEditedIndex !== null) {
        employeeData[cardBeingEditedIndex] = newEmployee;
    } else {
        employeeData.push(newEmployee);
    }

    form.reset();
    closeForm();
    renderCards(); // Re-render updated cards
}

function editCard(index) {
    const emp = employeeData[index];
    const form = document.querySelector("#employeeForm form");

    form.firstName.value = emp.firstName;
    form.lastName.value = emp.lastName;
    form.email.value = emp.email;
    form.department.value = emp.department;
    form.role.value = emp.role;

    cardBeingEditedIndex = index;
    openForm();
}

function deleteCard(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employeeData.splice(index, 1);
        renderCards();
    }
}

document.querySelector("#employeeForm form").addEventListener("submit", handleFormSubmit);
