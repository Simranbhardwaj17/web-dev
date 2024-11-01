//L-44
//D- 26/10/24

//when Js code exe,
// Call stack created  -> 1st GEC get created then
// func_called created then 
// func inside func created if it contain this then a/c to outer layer :-func as it dont have then
// a/c to GEC , if window:-  {this = window obj}
//              if node :-   {this = {}  }



function setUsername(username) {
    //complex calculations & DB calls
    this.username = username          // not use this "this" coz it get vanished as exe context removed
    console.log("call it");
    
}

function createUser(username, email, password) {
    // setUsername(username)     //internally it is not called, it's only a reference(we need to hold the reference as it get disappear after execution context removed)
    //it only print the value but can't hold reference, return value(not like exe context hte to value v htt jaye)

    setUsername.call(this, username)     //call method(to hold reference)       give reference ur own this(coz that func this get disappear & can't hold value)
    this.email = email
    this.password = password
}

const simran = new createUser("simran", "sim@g.com", "22")
console.log(simran);


//about call method, call ?
//call hmara curr exe context kisi or func ko pass kr deta h, give above example 






