//l-28

//++++++++++++  while loop  +++++++++++

// while (condition) {
//     //while syntax
// }
let week = 1
while (week <= 7) {
    console.log(`Week r: ${week}`);
    week++
}

const newArr = ["A", "N", "S", "H"]
let arr = 0                           //declare variable to compare(for condition)
while (arr < newArr.length) {
    // console.log(newArr);
    console.log(newArr[arr]);
    arr++     //arr = arr + 1
}


// +++++++++++++     do while loop    +++++++++++++++
 //use it when want to exe code once & then check condition to run further 

// do {
//     //syntax
// } while (condition);

// let totalStudent = 20
// let studentPresent = 16
// do{
//     console.log("Total number of student is " + totalStudent);
//     studentPresent++
// }while (studentPresent <= totalStudent) {
//     console.log("Good Morning Everyone");
// }


let totalStudent = 20
let studentPresent = 26
do{
    console.log("Total number of student is " + totalStudent);
    studentPresent++
}while (studentPresent <= totalStudent) {
    console.log("Good Morning Everyone");                     //It will also exe
}



