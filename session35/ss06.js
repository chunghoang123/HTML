// Lấy dữ liệu từ localStorage
let datas = JSON.parse(localStorage.getItem("ss35_b5+6")) || [];

// Lấy các phần tử DOM
let list = document.querySelector(".list");
let body = document.body;
let addBtn = document.querySelector(".add");
let filterStatus = document.querySelector(".status");
let searchName = document.querySelector(".search");
let addCategory = document.querySelector(".addCategory");
let addCategory_cancel = document.querySelector(".addCategory_cancel");
let addCancel = document.querySelector(".addCancel");
let addConfirm = document.querySelector(".addConfirm");
let idInput = document.getElementById("id");
let nameInput = document.getElementById("name");  
let dataCheck = document.querySelectorAll(".dataCheck");

let editIndex = null;

let filteredDatas = [];

// Tìm kiếm danh mục theo tên
searchName.addEventListener("keydown", function(event) {  
    let value = searchName.value.trim().toLowerCase();
    if (event.key === "Enter") {
        if (value === "") {
            alert("Tìm kiếm không được để trống!");
        } else {
            filteredDatas = datas.filter(data => data.name.toLowerCase().includes(value));
            displayFilteredDatas();
        }
    }
});

// Lọc theo trạng thái
filterStatus.addEventListener("change", function() {
    if (this.value === "all") {
        displayList();
    } else {
        filteredDatas = datas.filter(data => data.status === this.value);
        displayFilteredDatas();
    }
});

// Hiển thị danh sách danh mục
function displayList() {
    list.innerHTML = `<tr>
        <th>Mã danh mục</th>
        <th>Tên danh mục</th>
        <th>Trạng thái</th>
        <th>Chức năng</th>
    </tr>`;
    datas.forEach((data, index) => {
        list.innerHTML += `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td><span class="${data.status}"><i class="fa-solid fa-circle ${data.status === 'online' ? 'circleGreen' : 'circleRed'}"></i> ${data.statusTitle}</span></td>
            <td>
                <i class="fa-solid fa-pen" onclick="editData(${index})"></i>
                <i class="fa-solid fa-trash" onclick="deleteData(${index})"></i>
            </td>
        </tr>`;
    });
    localStorage.setItem("ss35_b5+6", JSON.stringify(datas));
}

// Hiển thị danh sách lọc
function displayFilteredDatas() {
    list.innerHTML = `<tr>
        <th>Mã danh mục</th>
        <th>Tên danh mục</th>
        <th>Trạng thái</th>
        <th>Chức năng</th>
    </tr>`;
    filteredDatas.forEach((data, index) => {
        list.innerHTML += `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td><span class="${data.status}"><i class="fa-solid fa-circle ${data.status === 'online' ? 'circleGreen' : 'circleRed'}"></i> ${data.statusTitle}</span></td>
            <td>
                <i class="fa-solid fa-pen" onclick="editData(${index})"></i>
                <i class="fa-solid fa-trash" onclick="deleteData(${index})"></i>
            </td>
        </tr>`;
    });
}

// Hiển thị modal thêm danh mục
addBtn.addEventListener("click", function () {
    addCategory.classList.toggle("display");
    idInput.value = "";
    nameInput.value = "";
    editIndex = null;
});

// Đóng modal
addCancel.addEventListener("click", () => addCategory.classList.toggle("display"));
addCategory_cancel.addEventListener("click", () => addCategory.classList.toggle("display"));

// Thêm hoặc chỉnh sửa danh mục
addConfirm.addEventListener("click", function () {
    let id = idInput.value.trim();
    let name = nameInput.value.trim();
    let statusValue = document.querySelector('input[name="addStatus"]:checked').value;

    if (!id || !name) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let statusTitle = statusValue === "online" ? "Đang Hoạt Động" : "Ngừng Hoạt Động";
    let status = statusValue;

    if (editIndex !== null) {
        datas[editIndex] = { id, name, statusTitle, status };
    } else {
        datas.push({ id, name, statusTitle, status });
    }
    
    displayList();
    addCategory.classList.toggle("display");
});

// Chỉnh sửa danh mục
function editData(index) {
    editIndex = index;
    let data = datas[index];
    idInput.value = data.id;
    nameInput.value = data.name;
    document.querySelector(`input[name="addStatus"][value="${data.status}"]`).checked = true;
    addCategory.classList.toggle("display");
}

// Xóa danh mục
function deleteData(index) {
    if (confirm("Bạn có chắc muốn xóa danh mục này?")) {
        datas.splice(index, 1);
        displayList();
    }
}

displayList();