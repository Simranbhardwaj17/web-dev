//l-9
/*
PRIMITIVE(call by value)

Inka orginal value/ data ka refence nhi diya jata only copy   (value change in copy)                            
7 types:
String, Number, boolean, null, undefined, Symbol, BigInt
*/

const age = 12;
const score = 88.9;

let measurement = null;
let color = undefined;

// In symbol if value pass is same then also value of id & anotherId is not same
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// bigInt use
const bigNumber = 345678765434567654565n


/*
NONPRIMITIVE(called as reference)
Array
Objects
Functions

Q: Js is static type or dynamically type ?
HINT:In js no need to define type of data no safety req.

A: JavaScript is a dynamic language and not static, which means that variables can hold values
of different types during runtime. Unlike languages such as Typescript or Java, you
don't need to declare the data type of a variable explicitly.
*/
//  They r reference type or non primit
const name = ["Simran", "Swati"]                  //


// ------- objects r 
// in curly braces in    key:value     pair
{                                               
    // name:"Simran",
    // age: 12                             //Error: SyntaxError: Unexpected token ':'
    // console.log(name, age);              //How to print obj?
}
// or can also name the object/ store in vari
let myObj = {
    name:"Simran",
    age:13
}
  
//-------------- Function  ------------
// function(){}                   //def of func

// Store func in vari
const myFunction = function(){
    console.log("Simran");
}

// Use typeof to find DT of vari
console.log(typeof bigNumber);


// l-10

// Stack (Primitive) , Heap (Non-Primitive)
// If Stack memory use, we get copy of declared vari
// in heap we get reference value, change in original if do any change
let state1 = "MP";

let state2 = state1;                               //Here copy of state1 given not orig.so, changes r made in copy
console.log(state2);

state2 = "UK";
console.log(state2);
console.log(state1);                               //No changes in state1
console.log(typeof state1);


// NonPrimitive store into heap, from it we get reference of orignal value not copy
user1 = {
    contact: 9999999999,
    email: "abc@gmail.com"
}

user2 = {
    contact: 1111111111,
    email: "abd@gmail.com"
}

user1 = user2;
user2.state = "Uttarakhand";
console.log(user2);
console.log(user1);             //due to change in user2, also change in user1

