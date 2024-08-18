//l-24
//Immediately invoked Function Expressions
// 2 reson to use it 
// 1. Not want to use/access global variable/scope in a func.So, make a differ scope
        //   coz of global vari/scope func get polluted.so, to remove that decl problem use "iife"
// 2. Want to execute immediately

function normalFunc() {
    console.log("It's a normal function scope"); 
}
normalFunc();

//Q::Why this func not work when above is not commented -----> TypeError: normalFunc(...) is not a function
// A::----->
//U will get below error if not use semicolon ; at end of func/code
//    coz iife invoked f immediately but not know when to stop f.
// So, to end the line use ; .Explictly use ; to end the code
// TypeError: (intermediate value)(intermediate value)(...) is not a function

//VVI:: to write two IIFE together must use ;

(function iifeFunc() {              //by using paranthesis(),scope/block get form     
    console.log("It's a iife function scope");
    console.log("DB connected");
})();
// syntax
// ()()      1st()-->for f_definition
//           2nd() --> for f_exe

(function iifeFun() {               //named IIFE
    console.log("It's a iife function scope");
    console.log("DB connected");
})();

//Arrow func for iife
( (name) => {                   //Simple/Unnamed IIFE & passed arg
    console.log(`It's a iife function scope, Ms ${name}`);
    console.log("DB connected");
})('Simran')
// name("S") //wrong

//VVI:: to write two IIFE together must use ;
