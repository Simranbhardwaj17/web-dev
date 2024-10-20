// L-42
//14-10-2024

//object literal++++++++++++++++++
//like classes in java, cpp

//As inside array some prop like .length & method like .map
const user = {
    username: "Simran",        //these r prop
    loginCount: 8, 
    signedIn: true,

    getUserDetails: function() {          //method
        console.log("Got user details from database");
        // console.log(' Username: ${username}');          ReferenceError: username is not defined    in func exe context, it is not defined
        console.log(`Username: ${this.username}`);      
        console.log(this);              //print current context (obj)         this keyword in func
          
    }
}

// console.log(user.username);     //give reference
//or
// console.log(user[username]);            //error: see how to use []
console.log(user.getUserDetails());  

//this:- obj
//this keyword in global context++++++++++++++++++
// console.log(this);                //o/p:- {} empty paranthesis(show that this ia a obj) coz of no global obj def
  // Global context change
// But in browser coz of lot of things like fetch, API, DOM, ...  u will get Window object


//Constructor func

//Ex:
// const promiseOne = new Promise()              
// const date = new Date()

//new keyword is a cons_func:- allow u to make multiple instance from a obj literal
//sometime like promisedate we need we need a new instance (not affect existing inst)

//new :-used to create new context(new instance/copy)

//create func
function User(username, loginCount, isLoggedIn){
  this.username = username;      //LHS = var, RHS = value to pass
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this      //u pass on the obj        try to know more????
 //implicitly defined(write or not (no effect))
}

// const userOne = User("Simran", 10, true);
// const userTwo = User("Simu", 33, true);
// console.log(userOne);       //see o/p, userTwo overwi8 userOne value .SO WE USE new keyword, as it create new instance

//Now get to know about const_func, as it give new copy(instance) noone like original or other not get affected by that
//use only new

const userOne = new User("Simran", 10, true);
const userTwo = new User("Simu", 33, true);
console.log(userOne);   //now o/p is exact what we want (no overwi8)
console.log(userOne.constructor);          //o/p: [Function: User]      constructor prop: reference about own(here user)
console.log(userTwo);   //Each have differet copy(o/p differ)
//as use new, no overwi8

//ABOUT "new" KEYWORD(internal mechanism)
//Step1:- New obj create (As use new keyword, empty obj(inst) get create )
//Step2:- Cons_func call coz of new keyword(pack arguments & give to u)
//Step3:- all arg get inject in this keyword
//Step4:- Get in func


//google instanceof











