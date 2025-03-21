let todoList = [
    {
        id: 1,
        task: "Hi the gym",
        completed: false,
    },
    {
        id: 2,
        task: "Pay bills",
        completed: true,
    },
    {
        id: 3,
        task: "meet george",
        completed: false,
    }
];
function renderTodo() {
    let listTodos = document.getElementById("myUL");
    listTodos.innerHTML = "";
    todoList.forEach(function (item) {
        if (item.completed === false) {
            listTodos.innerHTML += `<li>${item.task} <span class="close"
            onclick="deleteTodo(${item.id})">X</span></li>`;
        } else {
            listTodos.innerHTML += `<li class="checked">${item.task}<span class="close"
           onclick="deleteTodo(${item.id})">X</span></li>`;
        }

    })

}
//b1 gắn sự kiện onclick cho nút thêm mới trong giao diện
function addTodo() {
    //b2 lựa chọn phần tử input
    let inputElementValue = document.getElementById("myInput").value;
    //b3  tạo một đối tượng task mới từ giá trị của phần tử input
    // {
    //     id:id của phần tử cuối cùng +1
    //     task: giá trị của phần tử input
    //     completed: false
    // } 
    let id = todoList[todoList.length - 1].id + 1;
    let todo = {
        id: id,
        task: inputElementValue,
        completed: false
    };
    //b4     them task mới vào mảng todoList ban đầu
    todoList.push(todo);
    //b5 gọi hàm renderTodo() để render lại giao diện
    renderTodo();7 
}
//b1 gắn sự kiện onclick cho nút xoá trong giao diện
function deleteTodo(id) {
    //b2 lựa chọn phần tử input
    todoList = todoList.filter((task) => task.id !== id);
    //b3  gọi hàm renderTodo đế hiển thị lại toàn bộ task , trừ task đã xoá
    renderTodo();
}

renderTodo();


