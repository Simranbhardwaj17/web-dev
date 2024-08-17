/* In conversion of datatype most of time conversion not visible by 
console.log(valueInString);
but when see its type datatype is different 
console.log(typeof valueInString);
*/


// var score = 33
// console.log(score);
// console.log(typeof(score));


// let score = "22sd"
let score = "22"
// let score = NaN
// let score = true                 //Also try these
// let score = null
// let score = undefined
console.log(score);
console.log(typeof(score));

// conversion string to number
{
let valueInNumber = Number(score);
console.log(score);
console.log(typeof score);
console.log(valueInNumber);
console.log(typeof valueInNumber);
}

/*
Some conversions:
  var    =  type(num)
"33"(str) = 33(num)
"33ed" (str) = NaN                NaN: Not a num but type is number
true  = 1 ;   false  =  0   

*/

let valueInString = String(score);
console.log(score);
console.log(typeof score);
console.log(valueInString);
console.log(typeof valueInString);

{
let valueInBoolean = Boolean(score);
console.log(score);
console.log(typeof score);
console.log(valueInBoolean);
console.log(typeof valueInBoolean);
}

// let value = "";
let value = 1;
// let value = 0;
// let value = "Simran";
let valueInBoolean1 = Boolean(value);
console.log(value);
console.log(typeof value);
console.log(valueInBoolean1);
console.log(typeof valueInBoolean1);

/*What if value is empty string or whole num and value in boolean:
1 or any num => true
0 => false
"" => false
"Simran" => true
*/


// !!!!!!!!!!!!!!!!!!!!!!!!!!!       OPERATIONS      !!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!
// lec-07

let number = 5;
let negNumber = -number;
console.log(negNumber);


/*  Why this code not working
let name = Simran;                           //Error: ReferenceError: Simran is not defined
let surname = Bhardwaj;                      //   Error coz of no double quote below code is working coz variable defined well
let fullname = name + surname;
console.log(fullname);
*/

let name = "Simran";                          
let surname = " Bhardwaj ";
let fullName = name + surname;
console.log(fullName)
//or
console.log(name + surname);



console.log("1" + 3);
console.log("1" + "3");
console.log(1 + "3");
console.log("1" + '3');
console.log("1" + `3` + 3);
console.log(1 + 3 + 4);
console.log(1 +7 - 3 );
console.log(5 + 6 -[5 - 3] * 4);


console.log(true);
console.log(+true);
console.log(+1);


// +++++++++++++++++++++++++++++++++=   Prefix/ Postfix from mdn   =++++++++++++++++++++++++++++++++++++++++++++
let x = 3;
console.log(`x:${x}`);
// Expected output: "x:3"
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"


let a = 3;
// ++a;
console.log(`a:${++a}`);       //a:4                           // postfix increment:Increases by 1 and get print same time
// console.log(`a:${a}`);
console.log(`a:${a++}`);       //  a:4                        //prefix inc: Increases by 1 internally after printing
console.log(`a:${a}`);         // a:5                         //so due to prefix inc now a=5
console.log(`a:${a++}`);       //a:5
console.log(`a:${++a}`);       //a:7

const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:8, b:8"

