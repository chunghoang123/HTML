let pass = prompt(`Moi nhap mat khau: `)
let check = isStrongPass(pass)
alert(check)
function isStrongPass(str){
    let check = false
    let  hasNumber = false
   let hasUpperCase = false
   let hasLowerCase = false
if(str.length < 8 ){
    check = false
    return check
}
for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) { 
        hasNumber = true;
    } else if (str[i] === str.toUpperCase()[i]) {
        hasUpperCase = true;
    } else if (str[i] === str.toLowerCase()[i]) { 
        hasLowerCase = true;
    }
    if (hasNumber && hasUpperCase && hasLowerCase) {
        check = true;
        break;
    }
}
return check;
}