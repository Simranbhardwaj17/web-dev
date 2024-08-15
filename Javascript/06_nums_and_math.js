// Use console to get lot of values & methods of Maths & Number
const PNR = new Number (19022343 );
console.log(PNR);                                   // O/P:- [Number: 19022343], specially cast into Number type object
// console.log(PNR[0]);                             //not for digit
console.log(PNR.__proto__);                         //o/p: get object "{} "  Why empty?  

console.log(typeof PNR);

console.log(PNR.toString());                       //Convert to string, now use string method on it
console.log(typeof PNR);
console.log(PNR.toString().length);  
console.log(PNR.toFixed(3));                       //toFixed:- use to fix precision value that we get during calculation


const price = 3.9867
// const price = 323.9867
// const price = 3234.9867
console.log(price.toPrecision(3));                  //toPrecision:- work according to number before decimal

// let num1 
// console.log(num1.num);
Number.MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(typeof(Number.parseInt("Simu")));


/*********************Maths*********************** */
// We get Math library by defauklt with js
// In console, we get lot of values & methods 

// var Math: Math
// An intrinsic object that provides basic mathematics functionality and constants.
console.log(Math);
console.log(Math.abs(-22));                              // convert -ve to +ve number
console.log(Math.abs(-(-(-4))));
console.log(Math.round(3.4));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.4));
console.log(Math.max(6, 8, 11) );
console.log(Math.sqrt(25));

// Math library is used in Math.random
// (method) Math.random():---> number
// Returns a pseudorandom number between 0 and 1.
console.log(Math.random());                                             //0.11237532365277403
console.log((Math.random() * 10) + 1);                                  //8.721473943516033
console.log(Math.floor(Math.random() * 10) + 1);                         //1

const min = 10
const max = 20
console.log(Math.random());
console.log(max - min +1);
console.log(Math.round(Math.random() * (max -min + 1)));
console.log(Math.round(Math.random() * (max -min + 1)) + min);
console.log(min);
console.log(max - min +1);