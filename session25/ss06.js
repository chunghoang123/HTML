let str= prompt(`Moi nhap chuoi:`)
isPalindrome(str)
function isPalindrome(str){
    let arr = []
    arr = str.split("")
    let check = true;
    let arr2 = [];
    arr2 = arr.reverse();
    let k = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr2[k]) {
        check = false;
      }
      k--;
    }
    if (check) {
      alert(`Chuoi doi xung`);
    } else {
      alert(`Chuoi khong doi xung`);
    }
}