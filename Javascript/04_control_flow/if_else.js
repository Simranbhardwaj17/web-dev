// l-26
// //Control flow/Logic flow

// 1. if s/t
// if (condition) {  
//     console.log(`If conditon is true, code will execute`);
//     console.log(`If conditon is false, code will not execute`);
// }

if (2 == 2) {
    console.log("true condition");
    console.log("Code will execute");
}

if (2 != 2) {
    console.log("false condition");
    console.log("Code not exe");  
}

if (2 != 3) {
    console.log("true condition");
    console.log("Code exe");  
}

// conditions can be:-
// <, >, <=, >=, ==,!=, ===, 
//=== : Strict equal, also check datatype of the data

//if
//Both line print,if condition:true 
const userId = 232123
if (userId == 232123) {
    console.log("Hello Simran !");                     //Run if condition:true
}
console.log("Good Morning");                          //definitely printed

//if else
//O/P depend on condition,only if or else will be exe:--
let todayDate = 19-8-2020
if (todayDate === 19-8-2020) {
    console.log(`Today's date is ${todayDate} `);        // Today's date is -2009    Why??
}else {
    console.log(`Today's date is not ${todayDate} `);
}
console.log("Always executed");


//using if s/t++++++++++++++++++++++++++++++

// const score = 60
// console.log(`Your marks is ${score} out of 70`);
// if (score==60  || score == 70) {
//     console.log("Grade is: AA");
// }
// if (score == 50 || score == 69) {
//     console.log("Grade is: AB");
// }
// if (score == 40 || score == 49) {
//     console.log("Grade is: BB");
// }
// if(score == 30 || score == 39) {
//     console.log("Grade is: CC");
// }
// if(score == 23 || score == 29) {
//     console.log("Grade is: DD");
// }
// if(score < 23) {
//     console.log("Sorry you are Fail");
// }
// console.log("Wish you all the best for your future"); 


//Using else if s/t---------------

const score = 45
if (score >= 60) {
    console.log("A");
}
else if (score >= 59) {
    console.log("B");
}
else if (score >= 49) {
    console.log("C");            
}
else if (score >= 23) {
    console.log("D");
}
else {
    console.log("Fail");
}
console.log("Wish you all the best for your future"); 


//Check each T/F conditions using && & || operator with if s/t
const paymentMethod = true
const verified = true
const loggedIn= true
const loggedOut= false
const guestMode = false
if (loggedIn && verified) {
    console.log("Welcome to Sharang.com"); 
    if (loggedIn || loggedOut) {
        console.log("Welcome to Sharang shop"); 
    }
}
if (guestMode && loggedOut) {
    console.log("Welcome to Sharan.com"); 
}
if (loggedOut || loggedIn) {
    console.log("Welcome to Sharansh"); 
}
if (guestMode || loggedOut) {
    console.log("Welcome to Sharu"); 
}

















