let phones = [
    { id: 1, name: "iPhone 14", price: 25000000, quantity: 10, company: "Apple" },
    { id: 2, name: "Samsung Galaxy S22", price: 20000000, quantity: 15, company: "Samsung" },
    { id: 3, name: "Xiaomi Mi 12", price: 15000000, quantity: 20, company: "Xiaomi" },
];

let cart = [];
let menu = `
---------------------------------------MENU---------------------------------------
1. Hiển thị danh sách điện thoại theo hãng
2. Thêm điện thoại mới vào cửa hàng
3. Tìm kiếm điện thoại theo tên hoặc ID
4. Mua điện thoại
5. Thanh toán giỏ hàng
6. Sắp xếp điện thoại theo giá
7. Hiển thị tổng số tiền điện thoại trong kho
8. Hiển thị tổng số lượng điện thoại theo từng hãng
9. Thoát chương trình
Mời nhập lựa chọn:
`;

let input;
while (input !== 9) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            displayPhonesByCompany();
            break;
        case 2:
            addPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            sortPhones();
            break;
        case 7:
            totalStockValue();
            break;
        case 8:
            totalPhonesByCompany();
            break;
        case 9:
            console.log("Thoát chương trình");
            break;
        default:
            alert("Nhập sai, mời nhập lại");
            break;
    }
}

function displayPhonesByCompany() {
    let company = prompt("Nhập tên hãng điện thoại: ");
    let filteredPhones = phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
    console.log(filteredPhones.length > 0 ? filteredPhones : "Không có điện thoại thuộc hãng này.");
}

function addPhone() {
    let id = +prompt("Nhập mã điện thoại:");
    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá tiền:");
    let quantity = +prompt("Nhập số lượng:");
    let company = prompt("Nhập hãng điện thoại:");

    let newPhone = { id, name, price, quantity, company };
    phones.push(newPhone);
    console.log("Thêm điện thoại thành công!", newPhone);
}

function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại:");
    let foundPhones;
    
    if (!isNaN(keyword)) {
        let phoneId = parseInt(keyword);
        foundPhones = phones.filter(phone => phone.id === phoneId);
    } else {
        foundPhones = phones.filter(phone => phone.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    console.log(foundPhones.length > 0 ? foundPhones : "Không tìm thấy điện thoại.");
}

function buyPhone() {
    let phoneId = +prompt("Nhập ID điện thoại cần mua:");
    let quantity = +prompt("Nhập số lượng:");
    let selectedPhone = phones.find(phone => phone.id === phoneId);

    if (selectedPhone) {
        if (selectedPhone.quantity >= quantity) {
            selectedPhone.quantity -= quantity;
            console.log("Mua thành công!");

            let cartItem = cart.find(item => item.id === phoneId);
            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cart.push({ id: selectedPhone.id, name: selectedPhone.name, price: selectedPhone.price, quantity });
            }

            console.log("Giỏ hàng hiện tại:", cart);
        } else {
            console.log("Số lượng điện thoại không đủ.");
        }
    } else {
        console.log("Không tìm thấy điện thoại.");
    }
}

function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
    } else {
        let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        console.log(`Thanh toán thành công! Tổng tiền: ${total} VND`);
        cart = [];
    }
}

function sortPhones() {
    let option = +prompt("1. Sắp xếp giá tăng dần\n2. Sắp xếp giá giảm dần\nMời nhập lựa chọn:");
    
    if (option === 1) {
        phones.sort((a, b) => a.price - b.price);
        console.log("Điện thoại đã được sắp xếp theo giá tăng dần:", phones);
    } else if (option === 2) {
        phones.sort((a, b) => b.price - a.price);
        console.log("Điện thoại đã được sắp xếp theo giá giảm dần:", phones);
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
}

function totalStockValue() {
    let total = phones.reduce((acc, phone) => acc + phone.price * phone.quantity, 0);
    console.log(`Tổng giá trị điện thoại trong kho: ${total} VND`);
}

function totalPhonesByCompany() {
    let companyStats = {};
    phones.forEach(phone => {
        if (companyStats[phone.company]) {
            companyStats[phone.company] += phone.quantity;
        } else {
            companyStats[phone.company] = phone.quantity;
        }
    });
    console.log("Tổng số lượng điện thoại theo từng hãng:", companyStats);
}
