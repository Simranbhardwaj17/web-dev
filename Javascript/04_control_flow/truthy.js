// l-26
const wifi = "Connected"                                 //We assume string as true value
// const wifi = ""                                       //""->assumed as F
if (wifi) {                                              //no T/F & comparision of condition
    console.log("Secured connection");
} 
else{
    console.log("Data not available");
} 

// string as condition---------
if (`wifi`) {                        //truthy value
    console.log("Secured connection");
} 
else{
    console.log("Data not available");
} 


if (`wifi`, "") {                    //falsy value(condition separated by comma)
    console.log("Secured connection");
} 
else{
    console.log("Data not available");
} 

//falsy value r:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// //truthy value:
// "false", "0"," " (space in double quote), [], {} (empty obj), function(){}  (empty func)

const poll = []                     //not ri8 way to check arr
if (poll) {
    console.log("Poll result declared");
}else{
    console.log("Poll result not declared");
}

//To check arr is empty?
if (poll.length === 0) {
    console.log("Array empty");
}

//if obj empty in js , check obj is empty?
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {            //Object.keys:- Arr of obj form.So,apply arr.len, pass obj in it
    console.log("Empty object");
}

//Try in console
console.log(false == 0);
console.log(false == '');
console.log('' == 0);


//++++++++++Nullish coalescing Operator (??): null undefined+++++++++++++
               //Whenever null or undef  present then take other func/value/add flag value(T/F) on ur own using ?? coz null or
               // undef in a prog is not good else take 1st value
         
let val;
val = 3 ?? 4                          //O/P :-  3 (1st value)
val = null ?? 22                      //At 22 there will be complex func(that DB call) in real project 
//O/P:-  22  (not null(1st value))
val = undefined ?? 25
val = null ?? 22
              // If not comment all val then acc to last we get o/p
              //to check each o/p , comment other             
val = null ?? undefined                        //Why undef coz it cant be case. There must be num present
val = null ?? undefined ?? 10
val = null ?? 10 ?? 23                         //takes 1st number

console.log(val);               

//Why when it take 1st value 
//Ans:coz when call from DB, Firebase, use Appwrite ,u will get 2 value(null) not direct response
//  or may be no response(undefined) for that special case it will be helpful
// to take a value not disturb the whole DB


//++++++++++++++++=Ternary operator+++++++++++++++++++++++
//Syntax:
// conditon ? true : false

const balance = 500
balance > 570 ? console.log("Not enough balance") : console.log("Proceed for the purchase");

