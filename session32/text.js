//b1
// xd kho lưu trữ dự liệu mô phỏng
const photoList = [
    {
        id: 1,
        url: "http://127.0.0.1:5500/session32/%E1%BA%A3nh/t%E1%BA%A3i%20xu%E1%BB%91ng%20(1).jpg",
    },
    {
        id: 2,
        url: "http://127.0.0.1:5500/session32/%E1%BA%A3nh/c6a0a4a040fb5ed0b22ce461d92fd877.jpg",
    },
    {
        id: 3,
        url: "http://127.0.0.1:5500/session32/%E1%BA%A3nh/t%E1%BA%A3i%20xu%E1%BB%91ng.jpg",
    },
];

let container = document.getElementById("container");
let modal = document.getElementById("modal");
let img = document.getElementsByTagName("img")[0];
//b0 ẩn lớp phủ
modal.style.display = "none"



//b2: tính năng render(read)
//--> chuyển đổi toàn bộ các đối tượng dữ liệu
// thành phần tử HTML --> xuất hiện ở trên trình duyệt

// b2.1 duyệt qua toàn bộ mảng photoList
for(let i in photoList){
    //b2.2 chuyển đổi các đối tượng dữ liệu thành HTML
    let div  = `<div class="img" style = "background-image: url(${photoList[i].url})"></div>`;
    //b2.3:Nối các chuỗi vs định dạng HTML vừa tạo ra  từ dữ liệu
    // vào làm nội dung bên trong là HTML của container

    container.innerHTML += div;

}
// b3 xd cấu trúc cho lớp phủ
//b4 gọi tập hợp thẻ div(img) ra và gắn sự kiện onclick
let divList = document.getElementsByClassName("img");
for(let i =0;i<divList.length;i++){
    divList[i].onclick = function(){
      // b5 hiển thị ra modal
      modal.style.display = "flex";
      // b6 triết xuất đc url của màn hình ảnh đang bấm vào
      let url = divList[i].style.backgroundImage;
      url =url.replace(`url("`,"");
      url =url.replace(`")`,"");

      img.src = url;
    };
}
modal.onclick = function(){
    modal.style.display = "none";
}