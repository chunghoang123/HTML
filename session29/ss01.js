let Contact = [
    {
        id: 1,
        name: "Thành",
        email: "Thanh@gmail.com",
        phone: "0976702129",
    },
    {
        id: 2,
        name: "Tuấn",
        email: "Tuan@gmail.com",
        phone: "0357422384",
    },
    {
        id: 3,
        name: "Trang",
        email: "Trang@gmail.com",
        phone: "0847140305",
    },
]
let menu = `
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6. Thoát.
mời nhập lựa chọn
`
let input;
while (input !== 6) {
    input = +prompt(menu);
    switch (input) {
        case 1://Thêm đối tượng Contact vào danh sách liên hệ.
            let name = prompt("Nhập tên");
            let email = prompt("Nhập email");
            let phone = prompt("Nhập số điện thoại");
            let newContact = {
                id: Math.random(),
                name,
                email,
                phone,
            }
            Contact.push(newContact);
            displayContact();
            break;
        case 2:// Hiển thị danh sách danh bạ.
            displayContact();
            break;
        case 3://Tìm kiếm thông tin Contact theo số điện thoại.
            let searchPhone = prompt("Nhập số điện thoại");
            let findIndex = search("phone", searchPhone)
            if (findIndex !== -1) {
                alert(`Contact có số điện thoại ${searchPhone} là: ${Contact[findIndex].
                    name} - ${Contact[findIndex].email} - ${Contact[findIndex].phone
                    }
                        `);
            } else {
                alert("Không tìm thấy thông tin Contact");
            }
            displayContact();
            break;
        case 4://Cập nhật thông tin Contact(name, email, phone) theo id.
        let updateId = +prompt("Nhập id");
        let updateName = prompt("Nhập tên");
        let updateEmail = prompt("Nhập email");
        let updatePhone = prompt("Nhập số điện thoại");
        let updateContact = Contact.find((contact) => contact.id === updateId);
        if (updateContact) {
            updateContact.name = updateName;    
            updateContact.email = updateEmail;
            updateContact.phone = updatePhone;
            alert("Cập nhật thành công");
            } else {
                alert("Không tìm thấy thông tin Contact");
                }
                displayContact();
                break;
        case 5://Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        let deleteId = +prompt("Nhập id");
        let deleteContact = Contact.find((contact) => contact.id === deleteId);
        if (deleteContact) {
            Contact.splice(Contact.indexOf(deleteContact), 1);
            alert("Xóa thành công");
            } else {
                alert("Không tìm thấy thông tin Contact");
                }   
                displayContact();
            break;
        case 6://thoát
            console.log("thoát");
            break;
        default:
            console.log("lựa chọn không hợp lệ");
            break


    }
}
function displayContact() {
    Contact.forEach(function (newContact, index) {
        console.log(`${index + 1}.id:${newContact.id}- Tên:${newContact.name} - Gmail:${newContact.email} - SĐT:
            ${newContact.phone}`);

    });

}
function search(key, value) {
    let findIndex = -1;
    for (let i in Contact) {
        if (Contact[i][key] == value) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}
