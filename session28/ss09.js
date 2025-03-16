let choice;
let books = [];
while (choice !== 7) {
  choice = +prompt(`1.Thêm sách mới.
2.Hiển thị danh sách sách.
3.Tìm kiếm sách theo tiêu đề.
4.Cập nhật trạng thái mượn/trả sách theo id sách.
5.Xóa sách theo id sách ra khỏi danh sách.
6.Sắp xếp sách theo giá tăng dần.
7.Thoát.
==========================
Moi nhap lua chon:`);
  switch (choice) {
    case 1:
        addBooks();
        break
    case 2:
        dislayBooks(); 
        break
    case 3:
        findBook()
        break
    case 4:
        statusUpdate()
        break
    case 5:
        removeBook()
        break
    case 6:
        sortByPrice()
        break
    case 7:
        alert("Thoát chương trình.");
        break;
    default:
        alert("Lua chon khong hop le.");
  }
}
function addBooks(){
    let n = +prompt(`Moi nhap so luong sach muon them: `);
    if (n <= 0 || isNaN(n)) {
      alert(`So luong sach khong hop le`);
      return;
    }
    for (let i = 0; i < n; i++) {
        let id = +prompt(`Moi nhap id sach: `);
        if(isNaN(id)){
            alert(`Ma sach khong hop le`)
            i--
            continue
        }
        let title = prompt(`Moi nhap ten sach: `);
        let author = prompt(`Moi nhap ten tac gia: `);
        let price = parseFloat(prompt(`Moi nhap gia sach: `))
            let isAvailable = +prompt(`Moi nhap trang thai muon sach:
            1.True
            2.False
            `)  
            if(isAvailable ==1 ){
                isAvailable = true
            }else if(isAvailable==2){
                isAvailable = false
            }else{
                alert(`Trang thai khong hop le`)
                i--
                continue
            }
        
        books.push({id, title, author, price, isAvailable})
      }
}
function dislayBooks(){
    books.forEach(function(book){
        console.log(`      ID : ${book.id}`)
        console.log(`Title : ${book.title}`)
        console.log(`Author : ${book.author}`)
        console.log(`Price : ${book.price}`)
        console.log(`Is Available : ${book.isAvailable}`)
        console.log(`=========================`)
    })
    alert(`Danh sach sach da duoc hien thi tren man hinh console!`)
}
function findBook(){
    let name = prompt(`Moi nhap ten sach muon tim: `)
    let check = false
    books.forEach(function(element, index){
        if(element.title === name){
            alert(`              Da tim thay sach!
                =========================
                ID : ${element.id}
                Title : ${element.title}
                Author : ${element.author}
                Price : ${element.price}
                Is Available : ${element.isAvailable}
                =========================
              `);
              check = true
        }
    })
    if(check == false){
        alert(`Khong tim thay sach`)
    }
}
function statusUpdate(){
    let id = +prompt(`Moi nhap id sach muon cap nhat trang thai: `)
    let check = false
    books.forEach(function(element, index){
        if(element.id === id){
            if(element.isAvailable == true){
                element.isAvailable = false
            }else{
                element.isAvailable = true
            }
            alert(`
                Da cap nhat trang thai sach!
                =========================
                ID : ${element.id}
                Is Available : ${element.isAvailable}
                }
            `)
              check = true
        }
    })
    if(check == false){
        alert(`Khong tim thay sach`)
    }
}
function removeBook(){
    let id = +prompt(`Moi nhap id sach muon xoa: `)
    let check = false
    books.forEach(function(element, index){
        if(element.id === id){
            delete books[index]
            alert(`Da xoa sach voi id ${id} ra khoi danh sach!`)
            check = true
        }
    })
    if(check == false){
        alert(`Khong tim thay sach`)
    }
}
function sortByPrice(){
    books.sort((a, b) => a.price - b.price);
    books.forEach(function(book){
        console.log(`      ID : ${book.id}`)
        console.log(`Title : ${book.title}`)
        console.log(`Author : ${book.author}`)
        console.log(`Price : ${book.price}`)
        console.log(`Is Available : ${book.isAvailable}`)
        console.log(`=========================`)
    })
    alert(`Danh sach sach da duoc sap xep va hien thi tren man hinh console!`)
}