// l-29
//These all loops r array specific. In js, arr & obj r more powerful

//+++++++++++++++++++++        for of loop          ++++++++++++++++++++++++++++++

// ["", "",""]         strings in arr
// [{}, {},{}]         objects in arr 
//To access value, use loop then use .(dot) or [](sq)operator

//u can use loop on obj, arr, string coz all r iterator

//for of loop on string----------
const name = "Simran"
for (const letter of name) {
    console.log(letter);
    console.log(name);
}

// for of loop on array-----
const names = ["Simran", "Swati", "Sneha"]
for (const letter of names) {
    // console.log(letter);   
    console.log(names);
}


//================================MAPS:-------------------------
// map object holds key-value pairs & remember original insertion order of the keys
// Unique values
const map = new Map()  
map.set(balance = 8 )                         //Map obj. so, use (.) operator
map.set(balance = 3)  
map.set(balance - 3)  
map.set(balance = 3)                           //coz of unique value,not in o/p
console.log(map);
// Map(3) { 8 => undefined, 3 => undefined, 0 => undefined}


const newmap = new Map()  
newmap.set( 8)                          //Map->obj so, use (.) operator
newmap.set( 3)                          //No effect of removing balance coz its not a ri8 way to set newmap
newmap.set(-3)  
newmap.set(+3)                          //(+3) & 3 r same
console.log(newmap);                   //Map(0) {}   (if newmap.set --> map.set & above is not commented) coz both not match
//o/p::   Map(3) { 8 => undefined, 3 => undefined, -3 => undefined }

     
// //Define map---------
//Abt set::How to use?
// set(key: any, value: any): Map<any, any>
// Adds a new element with a specified key and value to the Map. If an element with the same key already exists, 
// the element will be updated.

// const project =Map()   -->     TypeError: Constructor Map requires 'new'    (Get to know map is a constructor)
const keyboardSign = new Map() 
keyboardSign.set(1,"!")         
keyboardSign.set(2,"@")         
keyboardSign.set(3,"#")         
keyboardSign.set(4,"$")         
keyboardSign.set(5,"*")
keyboardSign.set(5,"%")              //what if value is changed? -->      only value get updated at that key          -->
                                     // Map(6) { 1 => '!', 2 => '@', 3 => '#', 4 => '$', 5 => '%', 6 => '^' }
keyboardSign.set(6,"^")              //what if key is changed?  ==>  increment in o/p:-->   Map(6) { 1 => '!', 2 => '@', 3 => '#', 4 => '$', 5 => '%', 6 => '^' }
console.log("Keyboard sign on each number are: ");
console.log(keyboardSign);                        //Map(6) { 1 => '!', 2 => '@', 3 => '#', 4 => '$', 5 => '%', 6 => '^' }
console.log(typeof(keyboardSign));                //object

//for of loop on map++++++++++++++++++++++++
for (const key of keyboardSign) {                     //due to key, we get value divided 
    console.log(key);                                 //printed in array format
    // console.log(key, keyboardSign);                //Is it worth it?
}

//To get o/p in a normal way like not in array(Convert map into normal)---------
for (const [key, value] of keyboardSign) {            //syntax : destructure of array
    // console.log(key, ':-', value);
    console.log(`${key} :- ${value}`);
}


// //for of loop on object  (NOT WORKING) ------> refer to "04_for_in_loop.js" file
// const newObj = {
//     book1: "Physics",          //or   'book1'
//     author: "DC Pandey",
//     cost: 599
// }
// for (const [key, value] of newObj) {              //TypeError: newObj is not iterable 
//     console.log(key, ':-', value);
//     // console.log(`${key} :- ${value}`);
// }




















