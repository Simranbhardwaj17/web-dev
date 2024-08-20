// l-29

//++++++++++++++++++++       for in loop      ++++++++++++++
//on object------
const oneBook = {
    bookname: "Mechanics 1",          //or   'book1'
    author: "DC Pandey",
    cost: 599
}
// for (const [key,value,ss] in oneBook) {
//     console.log([key,value,ss]);             //not ri8(wrong)
//     //  console.log(`${key} :- ${value}`);
// }


for (const key in oneBook) {
    console.log(key);                                //print key
}

for (const key in oneBook) {
    console.log(oneBook[key]);                       //print value of the key
}

for (const key in oneBook) {
    console.log(`About book  ${key} :- ${oneBook[key]}`);        //print key & value 
}

//for in loop on arr-----
const library = ["novel", "comics", "articles","",""]
for (const key in library) {
    console.log(key);                                 //print key(index of arr) 
}
//in forof loop by key we directly print key of arr, but in forin loop key means index of key
//bydefault key of arr is num starting from 0,so obj is designed coz in obj we can set key

for (const key in library) {
    console.log(library[key]);                         //print value of the key
}

//forin loop on map (NOT WORKING)
// const keyboardSign = new Map() 
// keyboardSign.set(1,"!")         
// keyboardSign.set(2,"@")         
// keyboardSign.set(3,"#")         
// keyboardSign.set(4,"$")         
// keyboardSign.set(5,"*")
// keyboardSign.set(5,"%")
// for (const key in keyboardSign) {
//     console.log(keyboardSign[key]); 
// }
// for (const key in keyboardSign) {
//     console.log(key); 
// }