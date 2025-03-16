let employees = [];

while (true) {
    let choice = prompt(
        `Chọn chức năng: 
        1. Thêm nhân viên
        2. Xóa nhân viên
        3. Cập nhật lương
        4. Tìm kiếm nhân viên theo tên
        5. Thoát`
    );

    switch (Number(choice)) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            findUserByName();
            break;
        case 5:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }

    if (Number(choice) === 5) break;
}

function addEmployee() {
    let name = prompt("Nhập tên:");
    let position = prompt("Nhập vị trí:");
    let salary = Number(prompt("Nhập lương:"));
    let id = Math.floor(Math.random() * 9999943 + new Date().getMilliseconds());

    employees.push({ id, name, position, salary });
    console.log("Thêm thành công!", employees);
}

function deleteEmployee() {
    let id = Number(prompt("Nhập ID cần xóa:"));
    let index = employees.findIndex((item) => item.id === id);

    if (index !== -1) {
        if (confirm("Xác nhận xóa?")) {
            employees.splice(index, 1);
            console.log("Xóa thành công!");
        }
    } else console.log("Không tìm thấy ID:", id);
}

function updateSalary() {
    let id = Number(prompt("Nhập ID cần cập nhật lương:"));
    let index = employees.findIndex((item) => item.id === id);

    if (index !== -1) {
        employees[index].salary = Number(prompt("Nhập lương mới:"));
        console.log("Cập nhật thành công!", employees[index]);
    } else console.log("Không tìm thấy ID:", id);
}

function findUserByName() {
    let name = prompt("Nhập tên:");
    let result = employees.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));

    console.log(result.length ? result : "Không tìm thấy nhân viên.");
}
