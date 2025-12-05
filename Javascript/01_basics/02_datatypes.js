"use strict";                         //treat all js code as newer version

// alert("Data missing")              Error:we r using nodejs, not browsers

console.log("Hello");

// use 2 documentation mdn & tc39

let name = "Simran";                   //string DT
let age = 19;                          //number
let isLoggedIn = false;                //boolean
let city;                              //typeof(undef) -> undef
let disability = null;                 //typeof(null) -> object        HOW?

/*
PRIMITIVE DATATYPE
number = 2 to power 53
bigint = use for large int 
string = in ""
boolean = T/F
null = standalone value
undefined = value assigned/def later
symbol = unique


object
*/

console.log(typeof("Simran"));
console.log(typeof"Simran");
console.log(typeof state);
console.log(typeof age);
console.log(typeof disability);          //object, how?

var score = 33;
console.log(score);
console.log(typeof(score));

// #6 

let marks = "33abc";
console.log(marks);
console.log(typeof(marks));

let valueInNumber = Number(marks)
console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN (can't converted to num)

/* valueInNumber values
"33" = 33
"33abc" = NaN
true = 1; false = 0
*/

var score = "33";
console.log(score);
console.log(typeof(score));

//Below error occur when scope not defined, so we use scope
{
let score = 24;                          // Error: Cannot redeclare block-scoped variable 'score'.ts(2451)
console.log(score);                      // let score: number
console.log(typeof(score));
}

{
let score = 22;   
console.log(score);
console.log(typeof(score));
}