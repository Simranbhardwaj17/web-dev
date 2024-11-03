// L-47
// D-27/10/24

// (16:45) to search

// It is possible that when we get response from DB in obj form & loop not work on that obj , as it stop the iterate
// coz 1 prop is disable that iterate obj

// It tells hidden prop of obj
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")        //Math:-module,  PI:-key
console.log(descriptor);
// o/p:----------------
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

//It is possible that u can take prop of that value & change that or hard code it
// U can define that type of prop


// console.log(Math.PI);
// Math.PI = 44
// console.log(Math.PI);


//to declare obj(use factory func)
// const myObj = Object.create(null) //bydef null hoti h

// 2nd way
const chai = {
    name: "ginger chai",
    price: "250",
    isAvailable: true,

    orderChai: function () {
        console.log("no chai");
    }
}
console.log(chai);

//QUE:----- IS IT HAVE DESCRIPTOR PROPERTY? IFYES, HOW TO SET IT 
//ANS:------->     YES

console.log(Object.getOwnPropertyDescriptor(chai, "name"));       //(object, "whichProperty")
//now u get description of that prop of that obj


//u can also def/change prop  
//syntax----------
// Object.defineProperty(Object, 'propToChange', {ObjectCreateToChangeDescriptor} )

Object.defineProperty(chai, 'name', {         //NOTE:--  It is helpful when u want any prop of the obj to be not the part of iteration
    // writable: false,
    enumerable: false
} )
console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //now o/p change


//[key,value]:-properties
// for (let [key,value] of chai) {     obj may or may not be iterateable
//     console.log(`${}`); 
// }


// for (let [key,value] of Object.entries(chai)) {      //not working coz we want only key:value pair
//     console.log(`${key} : ${value}`); 
// }


for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {         // then enumerate
        console.log(`${key} : ${value}`);
    } 
}
//o/p:---
// price : 250
// isAvailable : true

//NOTE:-- After line 55("enumerable: false" applied on name) name can't be enumerate

//NOTE:--  It is helpful when u want any prop of the obj to be not the part of iteration


// sirf browser me obj ko dropdown se kholke dekhna prop h ya nhi r jr level
// but in production level(at time of building things) u get to know more about different prop of obj(by research)
