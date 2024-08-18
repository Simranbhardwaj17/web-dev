//l-19
//function used to pack code that used many times in a code
//  function definition:----
// function atEnd(user) {                                 //f_keyword f_name(parameter)
//     console.log(`Hello ${user}!!`);                         //print value
//     console.log("Welcome to JS tutorial");
// }
// // atEnd                               f_reference:-It tells func present there
// atEnd("Simran")                        // f_execution

// // or

// const user = "Simran"
// function atEnd(user) {                                 
//     console.log(`Hello ${user}!!`);
//     console.log("Welcome to JS tutorial");
// }
// atEnd(user)

// //or

// function atEnd(user) {  
//     return `Welcome ${user}`
// }
// console.log(atEnd("Simu"));
// console.log(atEnd());


// function addNum(num1, num2){
//     sum = num1 + num2 
//     console.log(sum);  
//     return sum                                 //return value
// }
// addNum(17, 30)
// addNum("Simranbhardwaj", 17)                   //Not good
// addNum(17, "30")                               //concat as js take both as string
// const add = addNum(2,2)
// console.log(add);

function atEnd(user = "John") {                   //------>default value given (if no value pass(undefined) not for null, for null if block work)
// function atEnd(user) { 
    if(user === null) {
        console.log("Enter your name");
        return
    }
    if(user === undefined) {                               // other syntax:--if(!user)
        console.log("Enter your name for further need");
        return
    }
    return `Welcome ${user}`
}
console.log(atEnd("Simu"));
console.log(atEnd(null));
console.log(atEnd());


//L-20
//Different way to pass parameter
//As in shopping cart num of items r not defined.So,

// function calculateCartPrice(num) {
//     return num                                                 //only 1 arg passed
// }
// console.log(calculateCartPrice(299));


// function calculateCartPrice(num) {
//     return num                                                 //print only 1st value   
// }
// console.log(calculateCartPrice(99, 499, 999));


//For passing many values in a func----------------------
// Use rest operator(...) -------->also cld as spread operator but a/c to use case
// Use R.O in func to pass multiple value & form a

// function calculateCartPrice(...num) {                        //coz of ... ,num takes all value & form arr
//     return num                                                  
// console.log(calculateCartPrice(99, 499, 999));

function calculateCartPrice(num1,num2, ...num) {                                         //takes num1 = 99, num2 = 499 & rest go to num
    return num                                                     
}
console.log(calculateCartPrice(99, 499, 999,2499));


// passing object in func-------------------
user = {
   username: "Simran",
   Address: "abc",
   id: 223
}
function forObject(anyObject) {                            //pass anyObj for generic way
    console.log(`Welcome ${anyObject.username}, Your id is ${user.id}`);          //In ${}any obj or real obj can be passed
}
forObject(user);                                           //Compulsary to pass obj(not any obj) 
// forObject(anyObject);     ----->ReferenceError: anyObject is not defined                    
console.log(forObject(user));                              //using it u also get a undefinrd in terminal. WHY?  
 
//We can also pass direct obj
forObject({
    username: "Simu",
    id: 876
})

//Passing arr in func-----------------------------
const price = [299, 199, 99, 9]                            //arr created
function return2ndValue(getArray) {                        //func accept arr & return sec value
    // return [getArray]                              //Don't place bracket before price as it is generic arr(anything can be) .So, pass getArray(arg)
    return getArray[1]                       
}                                 
console.log(return2ndValue(price));
//Same as obj, u can pass arr by using var(line:107) or direct arr(line: 114)
console.log(return2ndValue([299, 199, 99, 9] ));


