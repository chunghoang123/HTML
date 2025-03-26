// Lấy dữ liệu từ localStorage hoặc tạo mảng trống
let datas = JSON.parse(localStorage.getItem("categories")) || [];

const list = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const filterStatus = document.querySelector(".status");
const searchName = document.querySelector(".search");
const addCategory = document.querySelector(".addCategory");
const addCancel = document.querySelector(".addCancel");
const addConfirm = document.querySelector(".addConfirm");
const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");

let editIndex = null; // Biến xác định đang sửa hay thêm mới

// ✅ Hiển thị danh sách danh mục
function displayList() {
    list.innerHTML = `
        <tr>
            <th>Mã</th>
            <th>Tên danh mục</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
        </tr>
    `;

    datas.forEach((data, index) => {
        list.innerHTML += `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>
                <span class="${data.status === 'online' ? 'circleGreen' : 'circleRed'}">
                    ${data.status === 'online' ? 'Đang hoạt động' : 'Ngừng hoạt động'}
                </span>
            </td>
            <td>
                <i class="fa-solid fa-pen" onclick="editData(${index})"></i>
                <i class="fa-solid fa-trash" onclick="deleteData(${index})"></i>
            </td>
        </tr>`;
    });

    localStorage.setItem("categories", JSON.stringify(datas)); // Lưu vào localStorage
}

// ✅ Mở popup khi bấm "Thêm danh mục"
addBtn.addEventListener("click", () => {
    addCategory.classList.add("display");
    idInput.value = "";
    nameInput.value = "";
    document.querySelector('input[name="status"][value="online"]').checked = true;
    editIndex = null;
});

// ✅ Đóng popup khi bấm "Hủy"
addCancel.addEventListener("click", () => {
    addCategory.classList.remove("display");
});

// ✅ Xử lý thêm hoặc sửa danh mục
addConfirm.addEventListener("click", () => {
    let id = idInput.value.trim();
    let name = nameInput.value.trim();
    let status = document.querySelector('input[name="status"]:checked').value;

    if (!id || !name) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (editIndex !== null) {
        // Chỉnh sửa danh mục
        datas[editIndex] = { id, name, status };
    } else {
        // Thêm danh mục mới
        datas.push({ id, name, status });
    }

    addCategory.classList.remove("display"); // Đóng popup
    displayList(); // Cập nhật danh sách
});

// ✅ Xóa danh mục
function deleteData(index) {
    if (confirm("Bạn có chắc muốn xóa danh mục này không?")) {
        datas.splice(index, 1);
        displayList();
    }
}

// ✅ Hiển thị danh mục theo bộ lọc
filterStatus.addEventListener("change", () => {
    let value = filterStatus.value;
    if (value === "all") {
        displayList();
    } else {
        let filtered = datas.filter(data => data.status === value);
        renderFilteredList(filtered);
    }
});

// ✅ Cập nhật danh sách sau khi lọc
function renderFilteredList(filtered) {
    list.innerHTML = `
        <tr>
            <th>Mã</th>
            <th>Tên danh mục</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
        </tr>
    `;

    filtered.forEach((data, index) => {
        list.innerHTML += `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td><span class="${data.status === 'online' ? 'circleGreen' : 'circleRed'}">
                ${data.status === 'online' ? 'Đang hoạt động' : 'Ngừng hoạt động'}
            </span></td>
            <td>
                <i class="fa-solid fa-pen" onclick="editData(${index})"></i>
                <i class="fa-solid fa-trash" onclick="deleteData(${index})"></i>
            </td>
        </tr>`;
    });
}

// ✅ Chỉnh sửa danh mục
function editData(index) {
    let data = datas[index];

    idInput.value = data.id;
    nameInput.value = data.name;
    document.querySelector(`input[name="status"][value="${data.status}"]`).checked = true;

    editIndex = index; // Lưu lại index để sửa
    addCategory.classList.add("display"); // Mở popup
}

// Hiển thị danh sách ban đầu
displayList();
