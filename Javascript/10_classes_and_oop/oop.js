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

//this keyword in global context++++++++++++++++++
// console.log(this);                //o/p:- {} empty paranthesis coz of no global obj def
  // Global context change
// But in browser coz of lot of things like fetch, API, DOM, ...  u will get Window object


//Constructor func













