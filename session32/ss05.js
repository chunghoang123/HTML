let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('add');
let list = document.getElementById('myUL');

// Hàm thêm nhiệm vụ vào danh sách
addBtn.onclick = function(){
    let taskContent = inputTask.value
    if (taskContent === "") {
        alert("Nhiem vu khong duoc de trong")
        return
    }
    list.innerHTML += `<li>${taskContent} <button class="delete">X</button></li>`
    deleteTask()
}

function deleteTask() {
    let deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach(button => {
        button.onclick = function () {
            let confirmDelete = confirm(`Ban co chac muon xoa nhiem vu nay khong?`)
            if(confirmDelete){
            button.parentElement.remove()
            }
        };
    });
}

deleteTask();