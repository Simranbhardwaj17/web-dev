//l-21
let num1 = 17
const num2 = 6
var num3 = 5
// console.log(num1);
// console.log(num2);
// console.log(num3);

//When {}--> comes with function or conditions called as "scope" not with obj
                        // {}in obj called as obj declaration

 //We all want if a var is declared inside a scope it must be accessed only within that scope
//but var is not scoped- particular it can be accesssed outside also
if(true){
    let num1 = 2                  
    const num2 = 3
    var num3 = 4
    console.log(`in scope num1 is ${num1}`);               
    console.log(`in scope num2 is ${num2}`); 
    console.log(`in scope num3 is ${num3}`); 
}
console.log(num1);               //use let as it can be accessed only in scope
console.log(num2);
console.log(num3);               //only var can be accessed out of scope
                                 //so avoid using var 


//VVI NOTE: Global scope is different in console & in code environment/terminal using node


//L-22
//Nested scope
// Scope in func+++++++++++++++++++++
function studentBookDetail() {
    const name = "Simran Bhardwaj"
    console.log(`Student name: ${name} and her book details are:-`);
                                          //Try to know about closure
    function book() {                    //whenever nested func available,child func can access parent func
        let book1 = "Math"
        let book2 = "Physics"
        let book3 = "Chemistry"
        console.log(`Books in ${name} course are ${book1}, ${book2}, ${book3}`);
        console.log(`Books in course are ${book1}, ${book2}, ${book3}`);

        function price() {
            let math = 35
            let phy = 90
            let chem = 60
            console.log(`    
                Price of math is ${math} 
                Price of physics is ${phy} 
                Price of Chemistry is ${chem}`);
            
        }
        price()
    }
    book()
    console.log(book());
    
    // studentDetail()
}
studentBookDetail()                        //Whenever we declare or call func, call stack/scope is formed


// Scope in if block+++++++++++++++++++++
if (true) {
    const name = " Simran"

    if(name == " Simran") {
        const wish = "Congratulations"
        console.log(wish + name);
    }
    // console.log(wish);              --->  ReferenceError: wish is not defined (can't access out of scope)
    console.log(name);
}
// console.log(name);                   --->  ReferenceError: wish is not defined (can't access out of scope)


// ++++++++++++++++interesting++++++++++++++++++
// Both r func but difference is func decl(how f_execute,if f_call done before execution)  
function increment(num) {
    return num + 1
}
console.log(increment(3));
//0r
console.log(increment(3));
function increment(num) {
    return num + 1
}

const addOne = function(num) {                     //also called as expression, as a var hold the func
    return num + 1
}
console.log(addOne(16));
// or
// console.log(addOne(16));                          //Not work coz of var hold the func
// const addOne = function(num) {               
//     return num + 1
// }











