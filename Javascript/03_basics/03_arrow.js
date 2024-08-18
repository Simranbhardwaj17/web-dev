// l-23
const user = {
    name: "Simran",
    id: 542220,

    wish: function() {
        console.log(`Congratulations ${this.name}`);            //use this keyword for current context(to access var inside a scope)
        // console.log(globalThis);       //Find out its usecase
        console.log(this);
        
    }
}
user.wish()
// console.log(user.wish());                   //due to double console.log, we get undefined in terminal 
user.name = "Simu"                             //context changed
user.wish()
console.log(this);                             //when this(only this) out of func
//o/p:--{} coz of no global declaration.In node,this refer to empty obj
//In browser differ o/p coz of ((window is global obj in browser engine thats why we can capture every event of windows like click,form submit))   
//this is a global obj. so, not work in func(normal or arrow)
//If same type of code present sometime need to comment them to get ri8 o/p

// function hello() {
//     console.log(this);                //when this(only this) in a func, this not work in func as work in obj 
// }
// hello()


// function hello() {
//     name = "A"                      
//     console.log(this);               //In last line of o/p get,    name: 'A'  
// }
// hello()


// function hello() {
//     let name = "A"
//     console.log(this.name);          // o/p:-->undefined
// }                    
// hello()


// function hello() {
//     name = "A"
//     console.log(this.name);          // o/p:-->undefined
// }                    
// hello()


// const hello = function () {
//     let name = "A"
//     console.log("Hello user");
    
//     console.log(this.name);
// }
// // console.log(hello());
//         hello()

// Arrow func++++++++++++++++++++++
//
// const hello =  () => {
//     let name = "A"
//     console.log(this.name);
// }
// hello()

const hello =  () => {
    let name = "A"
    console.log(this);            //this not work in arrow func
}
hello()


// const addNum = (num1, num2) => {                                //Basic func
//     return num1 + num2
// }
// console.log(addNum(2, 2));


// const addNum = (num1, num2) =>  num1 + num2                     //Implicit func
// console.log(addNum(2, 2));

const addNum = (num1, num2) =>  (num1 + num2)                      //Implicit func(no need to wi8 retun if use ()paranthesis
console.log(addNum(2, 2));


//In explicit return, use return keyword 

//to return obj
const identity = (name) => ({username: "Simran"})         //Must wrap obj{} with () to form a scope
console.log(identity());




