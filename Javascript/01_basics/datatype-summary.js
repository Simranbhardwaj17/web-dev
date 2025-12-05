//l-9
/*

Depending on how to store into mem and acces data from mem,based on that data r categorized (prim or non-prim)

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
console.log(id === anotherId);  //false

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

// Store func in var
const myFunction = function(){
    console.log("Simran");
}

// Use typeof to find DT of var
console.log(typeof bigNumber);
console.log(typeof id);

//  DT    return type
// (Primitive)

// Number        number
// String        string
// Boolean       boolean
// null          object
// undefined     undefined
// BigInt        bigint
// Symbol        symbol

// In JavaScript, ""non-primitive data types"" are all ultimately of the ""object type"" . This includes: 

// • Objects: General-purpose collections of key-value pairs. 
// • Arrays: Ordered lists of values, which are a special type of object. 
// • Functions: Callable code blocks, also considered a special type of object. 

// When you use the typeof operator on any of these non-primitive types, the result will be "object", except for functions, which return "function". 
// Here's an illustration: 
let myObject = { key: "value" };
console.log(typeof myObject); // Output: "object"

let myArray = [1, 2, 3];
console.log(typeof myArray);  // Output: "object"

function myFunction1() {
  // ...
}
console.log(typeof myFunction); // Output: "function"



// In JavaScript, "non-primitive data types" are often referred to as reference types because they store a reference 
// to the value in memory, rather than the actual value itself. The primary non-primitive data types in JavaScript are:

// • Object: The most fundamental non-primitive type. Objects are collections of key-value pairs, 
// where keys are typically strings (or Symbols) and values can be any data type, including other objects. 

    let person = {
      name: "Alice",
      age: 30,
      isStudent: false
    };

// • Array: A specialized type of object used to store ordered collections of values. Arrays are indexed numerically, starting from 0.

    let colors = ["red", "green", "blue"];

// • Function: Functions are also a type of object in JavaScript, with the added capability of being callable. They encapsulate reusable blocks of code. 

    function greet(name) {
      console.log("Hello, " + name + "!");
    }

// Other non-primitive types, such as Date and RegExp, are also instances of the Object type. The key characteristic distinguishing non-primitive types
// from primitive types (like String, Number, Boolean, Null, Undefined, BigInt, and Symbol) is their mutability and how they are passed by reference rather than by value. 
