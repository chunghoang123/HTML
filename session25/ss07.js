let str= prompt(`Moi nhap chuoi:`)
upperCasing(str)
function upperCasing(str){
    str = str.toLowerCase()
    let result = ""; 
      for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i-1] == " " && str[i] != " ") {
          result += str[i].toUpperCase();
        } else {
          result += str[i];
        }
      }
      str=result
      alert(str);  
}