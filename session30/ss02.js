let book = [
    { id: 1, name: "Harry Potter", price: 100000, quantity: 20, category: "dị tượng" },
    { id: 2, name: "Doraemon", price: 20000, quantity: 21, category: "Hoạt Hình" },
    { id: 3, name: "Naruto", price: 120000, quantity: 10, category: "Hoạt Hình" },
];

let cart = [];
let menu = `
---------------------------------------MENU---------------------------------------
1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc ID
4. Mua sách
5. Sắp xếp sách theo giá
6. Tính tổng số lượng sách đã mua và tổng tiền
7. Hiển thị tổng số lượng sách trong kho
8. Thoát chương trình
Mời nhập lựa chọn:
`;

let input;
while (input !== 8) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            displayBook();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBook();
            break;
        case 6:
            totalBook();
            break;
        case 7:
            totalBookInStock();
            break;
        case 8:
            console.log("Thoát chương trình");
            break;
        default:
            alert("Nhập sai, mời nhập lại");
            break;
    }
}

// Hiển thị danh sách sách theo thể loại
function displayBook() {
    let bookCategory = prompt("Mời nhập thể loại sách");
    let bookList = book.filter(item => item.category.toLowerCase() === bookCategory.toLowerCase());
    console.log(bookList.length > 0 ? bookList : "Không có sách thuộc thể loại này.");
}

// Thêm sách mới vào kho
function addBook() {
    let bookName = prompt("Mời nhập tên sách");
    let bookPrice = +prompt("Mời nhập giá");
    let bookQuantity = +prompt("Mời nhập số lượng");
    let bookCategory = prompt("Mời nhập thể loại sách");

    let newBook = {
        id: Math.floor(Math.random() * 9999),
        name: bookName,
        price: bookPrice,
        quantity: bookQuantity,
        category: bookCategory,
    };

    book.push(newBook);
    console.log("Thêm sách thành công!", newBook);
}

// Tìm kiếm sách theo tên hoặc ID
function searchBook() {
    let keyword = prompt("Nhập tên sách hoặc ID:");
    let foundBooks;

    if (!isNaN(keyword)) {
        let bookId = parseInt(keyword);
        foundBooks = book.filter(item => item.id === bookId);
    } else {
        foundBooks = book.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    console.log(foundBooks.length > 0 ? foundBooks : "Không tìm thấy sách.");
}

// Mua sách
function buyBook() {
    let bookId = +prompt("Nhập ID sách cần mua:");
    let bookQuantity = +prompt("Nhập số lượng:");

    let selectedBook = book.find(item => item.id === bookId);

    if (selectedBook) {
        if (selectedBook.quantity >= bookQuantity) {
            selectedBook.quantity -= bookQuantity;
            console.log("Mua thành công!");

            let cartItem = cart.find(item => item.id === bookId);
            if (cartItem) {
                cartItem.quantity += bookQuantity;
            } else {
                cart.push({
                    id: selectedBook.id,
                    name: selectedBook.name,
                    price: selectedBook.price,
                    quantity: bookQuantity,
                });
            }

            console.log("Giỏ hàng hiện tại:", cart);
        } else {
            console.log("Số lượng sách không đủ.");
        }
    } else {
        console.log("Không tìm thấy sách.");
    }
}

// Sắp xếp sách theo giá
function sortBook() {
    let input2 = +prompt(`
1. Sắp xếp giá tăng dần
2. Sắp xếp giá giảm dần
Mời nhập lựa chọn:
    `);

    if (input2 === 1) {
        book.sort((a, b) => a.price - b.price);
        console.log("Sách đã được sắp xếp theo giá tăng dần:", book);
    } else if (input2 === 2) {
        book.sort((a, b) => b.price - a.price);
        console.log("Sách đã được sắp xếp theo giá giảm dần:", book);
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
}

// Tính tổng số lượng sách đã mua và tổng tiền
function totalBook() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
    } else {
        let totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        let totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        console.log(`Tổng số sách đã mua: ${totalQuantity}`);
        console.log(`Tổng tiền thanh toán: ${totalPrice} VND`);
    }
}

// Hiển thị tổng số lượng sách trong kho
function totalBookInStock() {
    let total = book.reduce((acc, item) => acc + item.quantity, 0);
    console.log(`Tổng số sách trong kho: ${total}`);
}
