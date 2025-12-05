// L-11
// Try to go through every function of string (MDN article & wi8 on ur own)
const myName = "Simran";
const title = " Bhardwaj";

console.log(myName + title);

console.log(`My name is ${myName}${title}`);                             //Modern way using backtick called as string interpolation
console.log(`Number of digit in my name is ${myName.length}`);
   

// 2nd way to declare string
const herName = new String ('simu' )  //pass name into constr
console.log(herName);                          // O/P:- [String: 'simu'], specially cast into string type object
console.log(herName[2]);
console.log(herName.__proto__);                //o/p: get object "{} "  Why empty  

console.log(typeof herName);

/*
let digit = new Number( 2, 12, 99)
console.log(digit);                      //[Number: 2]             Why only 1 number get as o/p
console.log(typeof digit);               //object             

*/
console.log(herName.toUpperCase);             //It tells that we use a function
console.log(herName.toUpperCase());  
console.log(herName);                         //no changes in real value coz above changes r done in copy not reference(coz it is primitive)
console.log(herName.charAt(1));
console.log(herName.indexOf('b'));             //O/P: -1, coz not def


let newString = herName.substring(0, 2);   //last is exclude (only +ve)
console.log(newString);  //si

let sliceStr = herName.slice(-3, 5)  //rev (can take -ve idx value)
console.log(sliceStr);  //imu


const url = "https://SimranBhardwaj17/web-dev/repo.com";
//functions/method
console.log(url.replace('web-dev', 'Basic-web'));             //changes done only in copy value not original (coz it is primitive)
console.log(url);             //Why become same url again                             //No change in original url
console.log(url.includes('Basic'));
console.log(url.includes('dev'));

console.log(url.split('/'));


let yourName = "      Simu     "
console.log(yourName);

console.log(yourName.trim());                   //To remove extra white space from both side
console.log(yourName.trimRight());


/*
In cosole, type this & get different string functions & learn
>const herName = new String ( 'Simran' )
<undefined
>herName
---------->String {'Simran'}
0: "S"
1: "i"
2: "m"
3: "r"
4: "a"
5: "n"
--> length: 6
-->[[Prototype]]: String
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: f concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
--------->[[Prototype]]: Object---------------------------->
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
[[PrimitiveValue]]: ""
[[PrimitiveValue]]: "Simran"

*/