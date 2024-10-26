//L-43
//D-23/10/24

// continue.....
// In it, we take ex to understand obj & new keyword in it


function multiplyBy5(num) {
    return num*5
}
multiplyBy5.power = 2      //(We use "." with obj.   Is it means func is a obj )

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);       //o/p:-  {}
//prototype not only give methods but also give some internal property


// In js everything is obj , func is func & obj too
// Func behave as func & also can as obj
// As js follow prototypal inheritance

// arr se obj , obj se null
// Array  ----->  object    --------> null
//Tech, func can also behave as obj


function createUser(username, score) {
    this.username = username 
    this.score = score        
}
//func is obj . So, can we inject any functionality(as in arr .len(), .map(), .slice()) in obj
// obj contain property & a property is hold by func
//so we can also declare our own func

//As createUser is a func then .proto 
//then inject (here->inc) what ever u want
//increment -> func/method
//here, through prototype inc is injected
createUser.prototype.increment = function(){
    // score++        no context which value to inc*book or notebook as 2 user r avail
    this.score++        //current context (jisne call kra)   
}

//create 2nd method
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}


// const book = createUser("book", 30)       //used using new keyword to run the code & add additional data
const notebook = createUser("notebook", 60)


// myArray.prototype.map()         for array no need to use the word "prototype" directly use ".map()" functionality as it is already avail in prototype

//to inject method in func use prototype as above but not in array


//Now u can directly use injected method

// book.printMe()         //o/p:--   TypeError: Cannot read properties of undefined (reading 'printMe')
//printMe() func not takes any value, so val not passed

//Error coz of :-
//Prop r injected as u can see by func_name.prototype  createUser.prototype
//But when value transferred from func to book, not informed abt additional property. So, use ""new""  KEYWORD


//QUE:- WHY BELOW CODE NOT WORKING?
// book.printMe()            
//This code was not working coz of "new" keyword not used at time of creating user: book


// Now, do correction
const book = new createUser("book", 30)
book.printMe()               //o/p:-  Price is 30





/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



//Notes for new keyword(My own understanding)

// Js classes k through constructor func nhi deti, Js "new" keyword k through constructor func deti h
// New keyword lgaya means classes k andr obj k saath krte ho instantiate new obj
// to remove complexity, use class keyword synax

// using new keyword we can access property & methods def in const proto(as above for book )
//how it works:
// createUser.prototype.increment = function(){      these r of no use
// const book = new createUser("book", 30)           when use new keyword then assemble(obj liya usme proto inject kra then def that mthd(like print) then make on basis of createUser func)


//const k andr proto linked hota h, then call const. So, that all this context wale like this.score, this.username get injected

//finally new obj is returned in book
