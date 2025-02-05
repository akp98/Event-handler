// Array to store employee objects
let employees = [];

// Function to handle the form submission
const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const professionInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const message = document.getElementById('message');
const employeesList = document.getElementById('employees-list');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = nameInput.value.trim();
    const profession = professionInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !profession || !age) {
        message.textContent = 'All fields are required!';
        message.className = 'error';
        return;
    }

    // Create a new employee object
    const employee = {
        id: employees.length + 1, // Unique ID based on array length
        name: name,
        profession: profession,
        age: parseInt(age)
    };

    // Add the employee to the array
    employees.push(employee);

    // Clear the input fields
    nameInput.value = '';
    professionInput.value = '';
    ageInput.value = '';

    // Show success message
    message.textContent = `Employee ${employee.name} added successfully!`;
    message.className = 'success';

    // Update the employee list
    displayEmployees();
});

// Function to display the list of employees
function displayEmployees() {
    employeesList.innerHTML = ''; // Clear previous list
    employees.forEach((employee) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <span>${employee.name} - ${employee.profession} - ${employee.age} years</span>
            <span class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</span>
        `;
        employeesList.appendChild(employeeDiv);
    });
}

// Function to delete an employee from the list
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees(); // Update the list
}
