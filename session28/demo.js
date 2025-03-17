// B1: Xây dựng cấu trúc dữ liệu
const library = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K Rowling",
        year: 2000,
        price: 10,
        isAvailable: true,
    },
    {
        id: 2,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        year: 2010,
        price: 20,
        isAvailable: false,
    },
    {
        id: 3,
        title: "Cạnh Tranh",
        author: "Thầy Hữu Giang",
        year: 2024,
        price: 5,
        isAvailable: true,
    },
];

// B2: Xây dựng menu tính năng
let menu = `
  ------------------ MENU ------------------
  1. Thêm sách mới.
  2. Hiển thị danh sách sách.
  3. Tìm kiếm sách theo tiêu đề.
  4. Cập nhật trạng thái mượn/trả sách theo id sách.
  5. Xóa sách theo id sách ra khỏi danh sách.
  6. Sắp xếp sách theo giá tăng dần.
  7. Thoát.
  Mời bạn nhập sự lựa chọn của bạn:
  `;

// B3: Hiển thị menu và cho người dùng nhập vào sự
// lựa chọn
let input;

while (input !== 7) {
    input = +prompt(menu);
    // B4: Điều hướng chương trình dựa vào lựa chọn của
    // người dùng
    switch (input) {
        case 1:
            // Thêm mới sách
            // B5: Cho người dùng lần lượt nhập vào các trường
            // thông tin của quyển sách muốn thêm
            // (title, author, year, price, isAvailable)
            let title = prompt("Mời bạn nhập vào tiêu đề sách");
            let author = prompt("Mời bạn nhập vào tên tác giả");
            let year = prompt("Mời bạn nhập vào năm xuất bản");
            let price = prompt("Mời bạn nhập vào giá sách");
            let isAvailable = prompt("Mời bạn nhập vào trạng thái sách");

            // B6: Tạo ra đối tượng mới bao gồm các thông tin
            // người dùng nhập vào từ bàn phím
            // book(id-tự sinh, title, author, year, price, isAvailable)
            let book = {
                id: Math.random(),
                title,
                author,
                year,
                price,
                isAvailable,
            };
            // B7: Thêm mới quyển sách này vào trong library
            library.push(book);
            displayBook();
            break;
        case 2:
            // Hiển thị sách
            displayBook();
            break;
        case 3:
            // Tìm kiếm sách theo tiêu đề
            // B11: Cho người dùng nhập vào tiêu đề của quyển sách
            // muốn tìm (searchTitle)
            let searchTitle = prompt("Mời bạn nhập vào tiêu đề của sách cần tìm");
            // B12: Linear Search (Tìm kiếm tuyến tính)
            let findIndex = search("title", searchTitle);
            if (findIndex === -1) {
                console.log(`Không có quyển sách nào với tiêu đề: ${searchTitle}`);
            } else {
                displayOneBook(library[findIndex], findIndex);
            }
            break;
        case 4:
            // Cập nhật trạng thái sách theo id
            // B13: Cho người dùng nhập vào id của sách muốn cập nhật
            let searchId = +prompt(
                "Mời bạn nhập vào id của quyển sách cần phải cập nhật"
            );
            // B14: Tìm kiếm sách theo id
            let updateIndex = search("id", searchId);
            // B15: Nếu không tìm thấy thấy --> Không có sách đó
            // B16: Cho người dùng nhập vào các trường thông tin mới
            // của quyển sách cần phải cập nhật
            if (updateIndex === -1) {
                console.log("Không tìm thấy quyển sách nào với id như trên");
            } else {
                // B17: Tiến hành cập nhật
                // B18: Hiển thị ra toàn bộ sách để phán ánh sự cập nhật đó
                library[updateIndex].price = +prompt("Mời bạn nhập vào giá cập nhật:");
                library[updateIndex].isAvailable = prompt(
                    "Mời bạn nhập vào trạng thái cập nhật:"
                );
                displayOneBook(library[updateIndex], updateIndex);
            }
            break;
        case 5:
            // Xoá sách theo id
            // B19: Cho người dùng nhập vào id của sách muốn xoá
            let deleteId = +prompt(
                "Mời bạn nhập vào id của quyển sách cần phải xoá"
            );
            // B20: Tìm kiếm sách theo id
            let deleteIndex = search("id", deleteId);
            // B21: Nếu không tìm thấy sách đó --> Không có sách đó
            if (deleteIndex === -1) {
                console.log("Không tìm thấy quyển sách nào với id như trên");
            } else {
                // B22: Xoá sách
                library.splice(deleteIndex, 1);
                console.log("Đã xoá sách thành công");
            }
            break;
        case 6:
            // Sắp xếp sách theo giá tăng dần
            library.sort((a, b) => a.price - b.price);
            console.log("Đã sắp xếp sách theo giá tăng dần");
            break;
            // Sử dụng các thuật toán sort đã học
            // Bubble sort (Sắp xếp nổi bọt), Insertion sort(Sắp xếp chèn), Selection sort(Sắp xếp lựa chọn)
            // sort();
            break;
        case 7:
            console.log("Thank you for using our library app !!!");
            // Thoát
            break;
        default:
            break;
    }
}

function displayBook() {
    // B8: Duyệt qua danh sách library
    library.forEach(function (book, index) {
        console.log(`Quyển sách ${index + 1}:`);
        console.log("Id Sách:", book.id);
        console.log("Tiêu đề:", book.title);
        console.log("Tác giả:", book.author);
        console.log("Giá:", book.price);
        console.log("Trạng thái:", book.isAvailable);
        console.log("Năm xuất bản:", book.year);
        console.log("---------------------");
    });
    // B9: Lấy ra toàn bộ đối tượng sách trong library

    // B10: Lần lượt truy cập (.) vào trong từng thuộc tính
    // của từng đối tượng sách và in chúng ra
}

function displayOneBook(book, index) {
    console.log(`Quyển sách ${+index + 1}:`);
    console.log("Id Sách:", book.id);
    console.log("Tiêu đề:", book.title);
    console.log("Tác giả:", book.author);
    console.log("Giá:", book.price);
    console.log("Trạng thái:", book.isAvailable);
    console.log("Năm xuất bản:", book.year);
    console.log("---------------------");
}

function search(key, value) {
    let findIndex = -1;
    for (let i in library) {
        if (value === library[i][key]) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}