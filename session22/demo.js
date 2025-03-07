let students = ["Nguyễn nhật minh", "le phuong linh", "dang khanh an", "truong ha cam linh"];
console.log(students)


let ramdomArr = [1, "hello", false, true, []];
console.log(ramdomArr)
students[0];
for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}
for(let student of students){
    console.log(student)
}


for(let index in students){
    console.log(index)
}
students.unshift("nguyen van a");
students.push("nguyen van b");


students.splice(1,0,"nguyen van c");

students[6]="nguyen van d"
students.shift();
students.pop();
students.splice(3,1);
