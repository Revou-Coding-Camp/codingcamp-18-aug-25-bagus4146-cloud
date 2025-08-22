//console.log("Hello, World!");

let todoList = [];

function handleAddTask() {
    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("todo-date");

    if (taskInput.value === '' || dateInput.value === '') {
        alert("Please fill in both fields.");
        return;
    }

    const newTask = {
        task: taskInput.value.trim(),
        date: dateInput.value,
        status : "pending"
    };

    todoList.push(newTask);
    taskInput.value = '';
    dateInput.value = '';
    console.log("Task added:", newTask);
    console.log(todoList);
    renderTasks();
}


function renderTasks() {
    const todoListContainer = document.getElementById("todo-list");
    todoListContainer.innerHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td class="text-center">${todoList[i].task}</td>
            <td class="text-center">${todoList[i].date}</td>
            <td class="text-center">${todoList[i].status}</td>
        `;

        todoListContainer.appendChild(row);
    }
}