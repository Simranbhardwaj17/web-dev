//L-43
//D-23/10/24

// continue.....

function multiplyBy5(num) {
    return num*5
}
multiplyBy5.power = 2      //(We use . with obj. Is it means func is a obj )

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);       //o/p:-  {}


// In js everything is obj , func is func & obj too
// Func behave as func & also can as obj
// As js follow prototypal inheritance

// arr se obj , obj se null
// Array  ----->  object    --------> null
//Tech, func can also behave as obj


function createUser(username, score) {
    this.username = username         
}










