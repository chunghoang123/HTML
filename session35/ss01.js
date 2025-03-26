// Lấy danh sách công việc từ LocalStorage
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let tasks = [];
tasks = JSON.parse(localStorage.getItem("tasks"));

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li>
                ${task}
                <button onclick="editTask(${index})">Sửa</button>
                <button onclick="deleteTask(${index})">Xóa</button>
            </li>
        `;
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    if (taskInput.value.trim() !== "") {
        tasks.push(taskInput.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        renderTasks();
    }
}

function editTask(index) {
    const newTask = prompt("Chỉnh sửa công việc:", tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Hiển thị danh sách khi tải lại trang
renderTasks();2415212413423413149